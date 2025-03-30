using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using CVP360.Models;
using CVP360.dbContext;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;

namespace CVP360.Controllers;

[ApiController]
[Route("/api/enrollments/")]
public class ManageEnrollmentController (  AppDbContext context,
                                            IDistributedCache session) : Controller {
    
    private readonly int SESSION_EXPIRED_CODE = 0;
    private readonly int SUCCESS_CODE = 1;
    public readonly static string DATA_PROTECTOR_NAME = "feed.protector";
    private readonly IDistributedCache _session = session;
    private readonly AppDbContext _context = context;

    [HttpGet]
    public async Task<IActionResult> GetAll() {
        string protocol = HttpContext.Request.Protocol;
        string? remote_ip = HttpContext.Connection.RemoteIpAddress?.ToString();

        var check = await SessionCheck();
        if(check.Item1 == null){

            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/enrollments/ {protocol}\" 401");
            return check.Item2 == SESSION_EXPIRED_CODE ? Unauthorized("Session expired.") : Unauthorized();
        }

        try {

            UserModel _user = check.Item1;
            var _enrollments = _context.Enrollments
            .Include(p => p.EnrollmentStatus)
            .Include(p => p.Project)
            .Where(p => p.UserId == _user.Id).ToList();

            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/enrollments/ {protocol}\" 200");
            return Ok(_enrollments);

        } catch (Exception e) {

            throw new Exception(e.ToString());
        }
    }

    [HttpPost]
    public async Task<IActionResult> Subscribe([FromBody] Enrollment _enrollment) {
        string protocol = HttpContext.Request.Protocol;
        string? remote_ip = HttpContext.Connection.RemoteIpAddress?.ToString();

        var check = await SessionCheck();
        if(check.Item1 == null){

            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/enrollments/ {protocol}\" 401");
            return check.Item2 == SESSION_EXPIRED_CODE ? Unauthorized("Session expired.") : Unauthorized();
        }

        if(!CheckEnrollmentData(_enrollment)) {
            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/enrollments/ {protocol}\" 400");
            return BadRequest();
        }

        try {
            using var _transaction = await _context.Database.BeginTransactionAsync();

            UserModel _user = check.Item1;
            var status = _context.EnrollmentStatus.Where(p => p.Status.Equals("Ativo")).FirstOrDefault();
            _enrollment.UserId = _user.Id;
            _enrollment.EnStatusId = status.Id;

            _context.Enrollments.Add(_enrollment);
            await _context.SaveChangesAsync();
            await _transaction.CommitAsync();

            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/enrollments/ {protocol}\" 200");
            return Ok();

        } catch (Exception e) {

            throw new Exception(e.ToString());
        }
    }

    [HttpPost("update")]
    public async Task<IActionResult> Update([FromBody] Enrollment _enrollment) {
        string protocol = HttpContext.Request.Protocol;
        string? remote_ip = HttpContext.Connection.RemoteIpAddress?.ToString();

        var check = await SessionCheck();
        if(check.Item1 == null){

            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/enrollments/ {protocol}\" 401");
            return check.Item2 == SESSION_EXPIRED_CODE ? Unauthorized("Session expired.") : Unauthorized();
        }

        if(!CheckEnrollmentData(_enrollment)) {
            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/enrollments/ {protocol}\" 400");
            return BadRequest();
        }

        try {
            using var _transaction = await _context.Database.BeginTransactionAsync();

            UserModel _user = check.Item1;
            var status = _context.EnrollmentStatus.Where(p => p.Id == _enrollment.EnStatusId).FirstOrDefault();
            var existingEnrollment = await _context.Enrollments.FirstOrDefaultAsync(p => p.Id == _enrollment.Id);

            existingEnrollment.EnStatusId = status.Id;

            _context.Enrollments.Update(existingEnrollment);
            await _context.SaveChangesAsync();
            await _transaction.CommitAsync();

            Console.WriteLine($"[{DateTime.Now}] From: {remote_ip} \"POST /api/enrollments/ {protocol}\" 200");
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

        private static bool CheckEnrollmentData(Enrollment enrollment) {
        if(enrollment.Value?.GetType() != typeof(double)) return false;
        if(enrollment.Date?.GetType() != typeof(DateOnly)) return false;

        return true;
    }
    
}