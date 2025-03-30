using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using CVP360.Models;
using CVP360.dbContext;
using System.Text.Json;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace CVP360.Controllers;

[ApiController]
[Route("/api/feed/projects/")]
public class FeedController (  AppDbContext context,
                                IDistributedCache session) : Controller {
    
    private readonly int SESSION_EXPIRED_CODE = 0;
    private readonly int SUCCESS_CODE = 1;
    private readonly string EVENT_CATEGORY_NAME = "Evento";
    private readonly string CAMPAIGN_CATEGORY_NAME = "Campanha";
    public readonly static string DATA_PROTECTOR_NAME = "feed.protector";
    private readonly IDistributedCache _session = session;
    private readonly AppDbContext _context = context;
    private static readonly PasswordHasher<Object> passwordService = new();


    [HttpGet]
    public async Task<IActionResult> GetProjects() {
        string protocol = HttpContext.Request.Protocol;
        string? remote_ip = HttpContext.Connection.RemoteIpAddress?.ToString();

        var check = await SessionCheck();
        if(!check.Item1){

            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/feed/projects {protocol}\" 401");
            return check.Item2 == SESSION_EXPIRED_CODE ? Unauthorized("Session expired.") : Unauthorized();
        }

        try {

            var _events = _context.Projects
            .Include(p => p.Category)
            .Where(p => p.Category.Name.Equals(EVENT_CATEGORY_NAME))
            .OrderByDescending(p => p.Id)
            .ToList()
            .Take(6);

            var _campaigns = _context.Projects
            .Include(p => p.Category)
            .Where(p => p.Category.Name.Equals(CAMPAIGN_CATEGORY_NAME))
            .OrderByDescending(p => p.Id)
            .ToList()
            .Take(6);
            
            int lastEventId = 0;
            if(_events.Any()) lastEventId = _events.Last().Id ?? 0;
            int lastCampId = 0;
            if(_campaigns.Any()) lastCampId = _campaigns.Last().Id ?? 0;

            HttpContext.Response.Cookies.Append("feed.last.event", lastEventId.ToString(), 
                        new CookieOptions{
                            HttpOnly = true,
                            Secure = true
                        });
            HttpContext.Response.Cookies.Append("feed.last.camp", lastCampId.ToString(), 
                        new CookieOptions{
                            HttpOnly = true,
                            Secure = true
                        });
                        
            List<Project> projects = [];
            projects.AddRange([.. _events]);
            projects.AddRange([.. _campaigns]);
            
            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/feed/projects {protocol}\" 200");
            return Ok(projects);

        } catch (Exception e) {

            throw new Exception(e.ToString());
        }
    }

    [HttpGet("more")]
    public async Task<IActionResult> GetMoreProjects() {
        string protocol = HttpContext.Request.Protocol;
        string? remote_ip = HttpContext.Connection.RemoteIpAddress?.ToString();

        var check = await SessionCheck();
        if(!check.Item1){

            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/feed/projects {protocol}\" 401");
            return check.Item2 == SESSION_EXPIRED_CODE ? Unauthorized("Session expired.") : Unauthorized();
        }

        try {

            IEnumerable<Project> _events = [];
            int lastEventId;
            IEnumerable<Project> _campaigns = [];
            int lastCampId;

            if(int.TryParse(HttpContext.Request.Cookies["feed.last.event"], out lastEventId) && lastEventId != 0) {
                _events = _context.Projects
                .Include(p => p.Category)
                .Where(p => p.Category.Name.Equals(EVENT_CATEGORY_NAME) && p.Id < lastEventId)
                .OrderByDescending(p => p.Id)
                .ToList()
                .Take(6);
                
            } else {
                _events = _context.Projects
                .Include(p => p.Category)
                .Where(p => p.Category.Name.Equals(EVENT_CATEGORY_NAME))
                .OrderByDescending(p => p.Id)
                .ToList()
                .Take(6);
            }

            if(int.TryParse(HttpContext.Request.Cookies["feed.last.camp"], out lastCampId) && lastCampId != 0) {
                _campaigns = _context.Projects
                .Include(p => p.Category)
                .Where(p => p.Category.Name.Equals(CAMPAIGN_CATEGORY_NAME) && p.Id < lastCampId)
                .OrderByDescending(p => p.Id)
                .ToList()
                .Take(6);

            } else {
                _campaigns = _context.Projects
                .Include(p => p.Category)
                .Where(p => p.Category.Name.Equals(CAMPAIGN_CATEGORY_NAME))
                .OrderByDescending(p => p.Id)
                .ToList()
                .Take(6);
            }

            if(_events.Any()) lastEventId = _events.Last().Id ?? 0;
            if(_campaigns.Any()) lastCampId = _campaigns.Last().Id ?? 0;

            HttpContext.Response.Cookies.Append("feed.last.event", lastEventId.ToString(), 
                        new CookieOptions{
                            HttpOnly = true,
                            Secure = true
                        });
            HttpContext.Response.Cookies.Append("feed.last.camp", lastCampId.ToString(), 
                        new CookieOptions{
                            HttpOnly = true,
                            Secure = true
                        });
                        
            List<Project> projects = [];
            projects.AddRange([.. _events]);
            projects.AddRange([.. _campaigns]);
            
            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/feed/projects {protocol}\" 200");
            return Ok(projects);

        } catch (Exception e) {

            throw new Exception(e.ToString());
        }
    }

    private async Task<(bool, int)> SessionCheck(){

        try {

            string? sid = HttpContext.Request.Cookies["connect.sid"];
            if(string.IsNullOrWhiteSpace(sid)) return (false, -1);

            string? jsonData = await _session.GetStringAsync(sid);

            if(string.IsNullOrWhiteSpace(jsonData)) {
                HttpContext.Response.Cookies.Delete("connect.sid");
                return (false, SESSION_EXPIRED_CODE);
            }

            UserModel? _user = JsonSerializer.Deserialize<UserModel>(jsonData) ?? throw new Exception();

            return (true, SUCCESS_CODE);

        } catch(Exception e) {

            Console.WriteLine("Failed to retrieve session data.");
            throw new Exception(e.ToString());
        }     

    }
    
}