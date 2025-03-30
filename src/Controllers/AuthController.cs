using System.Text.Json;
using CVP360.dbContext;
using CVP360.Models;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;

namespace CVP360.Controllers;

[ApiController]
[Route("/api/auth/")]
public class AuthController (IDistributedCache session) : Controller {
    private readonly IDistributedCache _session = session;

    [HttpGet]
    public async Task<IActionResult> Authenticate() {
        string protocol = HttpContext.Request.Protocol;
        string? remote_ip = HttpContext.Connection.RemoteIpAddress?.ToString();

        try {
            string? sid = HttpContext.Request.Cookies["connect.sid"];

            if (string.IsNullOrWhiteSpace(sid)) {

                Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"GET /api/auth {protocol}\" 401");
                return Unauthorized();
            }

            string? jsonData = await _session.GetStringAsync(sid);

            if(string.IsNullOrWhiteSpace(jsonData)) {

                HttpContext.Response.Cookies.Delete("connect.sid");
                Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"GET /api/auth {protocol}\" 401");
                return Unauthorized("Session expired");
            }

            var _user = JsonSerializer.Deserialize<UserModel>(jsonData) ?? throw new Exception();
            _user.Password = "";
            
            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"GET /api/auth {protocol}\" 200");
            return Ok(_user);

        } catch (Exception e) {

            throw new Exception(e.ToString());
        }
    }
}