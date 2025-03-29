using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using CVP360.Models;
using CVP360.dbContext;
using System.Text.Json;

namespace CVP360.Controllers;

[ApiController]
[Route("/api/register/")]
public class RegisterController (  AppDbContext context,
                                IDistributedCache session,
                                IDataProtectionProvider provider) : Controller {
    
    private readonly static double SESSION_EXPIRE_TIME_IN_HOURS = 12;
    public readonly static string DATA_PROTECTOR_NAME = "account.protector";
    private readonly static string DEFAULT_USER_PROFILE = "Donor"; 
    private readonly AppDbContext _context = context;
    private readonly IDistributedCache _session = session;
    private readonly IDataProtector _protector = provider.CreateProtector(DATA_PROTECTOR_NAME);
    private static readonly PasswordHasher<Object> passwordService = new();


    [HttpPost]
    public async Task<IActionResult> Login([FromBody] UserModel _user) {
        string protocol = HttpContext.Request.Protocol;
        string? remote_ip = HttpContext.Connection.RemoteIpAddress?.ToString();

        try {
            
            if(_user == null || !CheckUserData(_user)) {
                Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/register {protocol}\" 400");
                return BadRequest();
            }

            var existingUser = _context.Users.Where(p => p.Email.Equals(_user.Email.ToLower())).ToList();

            if(existingUser.Count > 0) {
                Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/register {protocol}\" 409");
                return Conflict("User already exist.");
            }

            _user.Email = _user.Email.ToLower();
            _user.Password = passwordService.HashPassword(new(), _user.Password);
            _user.Profile ??= _context.Profiles.Where(p => p.Name.Equals(DEFAULT_USER_PROFILE)).First();

            using var _transaction = await _context.Database.BeginTransactionAsync();

            await _context.Users.AddAsync(_user);
            await _context.SaveChangesAsync();
            await _transaction.CommitAsync();

            _user.Password = "";

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
            
            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/register {protocol}\" 201");
            return Ok();

        } catch (Exception e) {

            throw new Exception(e.ToString());
        }
    }

    private static bool CheckUserData(UserModel user) {
        if(string.IsNullOrWhiteSpace(user.FullName)) return false;
        if(string.IsNullOrWhiteSpace(user.Email)) return false;
        if(string.IsNullOrWhiteSpace(user.Password)) return false;

        return true;
    }
    
}