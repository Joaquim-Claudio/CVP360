using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using CVP360.Models;
using CVP360.dbContext;
using System.Text.Json;
using Microsoft.AspNetCore.Identity;
using System.Text.Json.Serialization;

namespace CVP360.Controllers;

[ApiController]
[Route("/api/user/cards/")]
public class ManageCardController (  AppDbContext context,
                                IDistributedCache session) : Controller {
    
    private readonly int SESSION_EXPIRED_CODE = 0;
    private readonly int SUCCESS_CODE = 1;
    public readonly static string DATA_PROTECTOR_NAME = "feed.protector";
        private readonly static double SESSION_EXPIRE_TIME_IN_HOURS = 12;
    private readonly IDistributedCache _session = session;
    private readonly AppDbContext _context = context;
    private static readonly PasswordHasher<Object> passwordService = new();


    [HttpPost]
    public async Task<IActionResult> AddCreditCard([FromBody] CreditCard _card) {
        string protocol = HttpContext.Request.Protocol;
        string? remote_ip = HttpContext.Connection.RemoteIpAddress?.ToString();

        var check = await SessionCheck();
        if(check.Item1 == null){

            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/user/cards/ {protocol}\" 401");
            return check.Item2 == SESSION_EXPIRED_CODE ? Unauthorized("Session expired.") : Unauthorized();
        }

        if(!CheckCardData(_card)) {
            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/user/cards/ {protocol}\" 400");
            return BadRequest();
        }

        try {
            using var _transaction = await _context.Database.BeginTransactionAsync();

            _card.Cvv = passwordService.HashPassword(new(), _card.Cvv);
            UserModel _user = check.Item1;
            _card.UserId = _user.Id;

            _context.CreditCards.Add(_card);
            await _context.SaveChangesAsync();
            await _transaction.CommitAsync();

            _user.CreditCards.Add(_card);

            string? sid = HttpContext.Request.Cookies["connect.sid"];
            await _session.SetStringAsync(sid, 
                        JsonSerializer.Serialize<UserModel>(_user), 
                        new DistributedCacheEntryOptions{
                            AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(SESSION_EXPIRE_TIME_IN_HOURS)
                        });

            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/user/cards/ {protocol}\" 200");
            return Ok();

        } catch (Exception e) {

            throw new Exception(e.ToString());
        }
    }

    [HttpDelete]
    public async Task<IActionResult> DeleteCreditCard([FromQuery] int cardId) {
        string protocol = HttpContext.Request.Protocol;
        string? remote_ip = HttpContext.Connection.RemoteIpAddress?.ToString();

        var check = await SessionCheck();
        if(check.Item1 == null){

            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"DELETE /api/user/cards/ {protocol}\" 401");
            return check.Item2 == SESSION_EXPIRED_CODE ? Unauthorized("Session expired.") : Unauthorized();
        }

        try {
            using var _transaction = await _context.Database.BeginTransactionAsync();

            UserModel _user = check.Item1;
            var _card = _user.CreditCards.FirstOrDefault(c => c.Id == cardId);
            
            if(_card == null) {
                Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"DELETE /api/user/cards/ {protocol}\" 404");
                return NotFound();
            }
            
            _user.CreditCards.Remove(_card);

            _context.CreditCards.Remove(_card);
            await _context.SaveChangesAsync();
            await _transaction.CommitAsync();


            string? sid = HttpContext.Request.Cookies["connect.sid"];
            await _session.SetStringAsync(sid, 
                        JsonSerializer.Serialize<UserModel>(_user), 
                        new DistributedCacheEntryOptions{
                            AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(SESSION_EXPIRE_TIME_IN_HOURS)
                        });

            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"DELETE /api/user/cards/ {protocol}\" 200");
            return Ok();

        } catch (Exception e) {

            throw new Exception(e.ToString());
        }
    }



    private async Task<(UserModel?, int)> SessionCheck(){

        try {

            string? sid = HttpContext.Request.Cookies["connect.sid"];
            if(string.IsNullOrWhiteSpace(sid)) return (null, -1);

            string? jsonData = await _session.GetStringAsync(sid);

            if(string.IsNullOrWhiteSpace(jsonData)) {
                HttpContext.Response.Cookies.Delete("connect.sid");
                return (null, SESSION_EXPIRED_CODE);
            }

            UserModel? _user = JsonSerializer.Deserialize<UserModel>(jsonData) ?? throw new Exception();

            return (_user, SUCCESS_CODE);

        } catch(Exception e) {

            Console.WriteLine("Failed to retrieve session data.");
            throw new Exception(e.ToString());
        }     

    }

        private static bool CheckCardData(CreditCard card) {
        if(card.Number.GetType() != typeof(string) || string.IsNullOrWhiteSpace(card.Number)) return false;
        if(card.Name.GetType() != typeof(string) || string.IsNullOrWhiteSpace(card.Name)) return false;
        if(card.Cvv.GetType() != typeof(string) || string.IsNullOrWhiteSpace(card.Cvv)) return false;
        if(card.ExpireDate?.GetType() != typeof(DateOnly)) return false;

        return true;
    }
    
}