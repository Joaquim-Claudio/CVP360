using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using CVP360.UserData;
using CVP360.Models;
using CVP360.dbContext;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;

namespace CVP360.Controllers;

[ApiController]
[Route("/api/login/")]
public class LoginController (  AppDbContext context,
                                IDistributedCache session,
                                IDataProtectionProvider provider) : Controller {
    
    private readonly static double SESSION_EXPIRE_TIME_IN_HOURS = 12;
    public readonly static string DATA_PROTECTOR_NAME = "account.protector";
    private readonly AppDbContext _context = context;
    private readonly IDistributedCache _session = session;
    private readonly IDataProtector _protector = provider.CreateProtector(DATA_PROTECTOR_NAME);
    private static readonly PasswordHasher<Object> passwordService = new();


    [HttpPost]
    public async Task<IActionResult> Login([FromBody] UserCredentials credentials) {
        string protocol = HttpContext.Request.Protocol;
        string? remote_ip = HttpContext.Connection.RemoteIpAddress?.ToString();

        try {
            
            var result = _context.Users
                                    .Where(p => p.Email.Equals(credentials.Username.ToLower()))
                                    .Select(p => new {
                                        p.Id,
                                        p.FullName,
                                        p.BirthDate,
                                        p.Email,
                                        p.Password,
                                        p.PhoneNumber,
                                        p.Nif,
                                        Profile = p.Profile != null ? new { 
                                            p.Profile.Id, 
                                            p.Profile.Name,
                                            p.Profile.ExtendedName } 
                                            : null,
                                        CreditCards = p.CreditCards.Select(c => new {
                                            c.Id,
                                            c.Number,
                                            c.Name,
                                            c.ExpireDate,
                                            c.Issuer
                                        }).ToList()
                                    })
                                    .FirstOrDefault();

            if(result == null) {
                Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/login {protocol}\" 404");
                return NotFound();
            }

            UserModel _user = new()
            {
                Id = result.Id,
                FullName = result.FullName,
                BirthDate = result.BirthDate,
                Email = result.Email,
                Password = result.Password,
                PhoneNumber = result.PhoneNumber,
                Nif = result.Nif,
                Profile = result.Profile != null ? new Profile
                {
                    Id = result.Profile.Id,
                    Name = result.Profile.Name,
                    ExtendedName = result.Profile.ExtendedName
                } : null,
                CreditCards = result.CreditCards != null ? [.. result.CreditCards.Select(c => new CreditCard
                {
                    Id = c.Id,
                    Number = c.Number,
                    Name = c.Name,
                    ExpireDate = c.ExpireDate,
                    Issuer = c.Issuer
                })] : []
            };
            
            string? hashedPassword = _user.Password;

            if(passwordService.VerifyHashedPassword(new(), hashedPassword, credentials.Password) == PasswordVerificationResult.Failed) {
                Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/login {protocol}\" 404");
                return NotFound();
            }

            string? sid = _protector.Protect(_user.Email);
            await _session.SetStringAsync(sid, 
                        JsonSerializer.Serialize<UserModel>(_user), 
                        new DistributedCacheEntryOptions{
                            AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(SESSION_EXPIRE_TIME_IN_HOURS)
                        });

            HttpContext.Response.Cookies.Append("connect.sid", sid, 
                        new CookieOptions{
                            HttpOnly = true,
                            Secure = true
                        });

            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/login {protocol}\" 200");
            return Ok();

        } catch (Exception e) {

            throw new Exception(e.ToString());
        }
    }
    
}