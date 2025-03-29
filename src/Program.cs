using System.Text.Json.Serialization;
using CVP360.dbContext;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDataProtection();

string? redis_host = builder.Configuration.GetValue<string>("REDIS_HOST");
string? redis_port = builder.Configuration.GetValue<string>("REDIS_PORT");

string? redisConnectionString = builder.Configuration.GetConnectionString("SessionRedis")
    ?.Replace("{HOST}", redis_host)
    ?.Replace("{PORT}", redis_port);

builder.Services.AddStackExchangeRedisCache(options => 
    options.Configuration = redisConnectionString);

builder.Services.AddSession();


string? db_username = builder.Configuration.GetValue<string>("DB_USER");
string? db_password = builder.Configuration.GetValue<string>("DB_PASSWORD");
string? db_host = builder.Configuration.GetValue<string>("DB_HOST");
string? db_port = builder.Configuration.GetValue<string>("DB_PORT");
string? db_name = builder.Configuration.GetValue<string>("DB_NAME");


string? connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
    ?.Replace("{USERNAME}", db_username)
    ?.Replace("{PASSWORD}", db_password)
    ?.Replace("{HOST}", db_host)
    ?.Replace("{PORT}", db_port)
    ?.Replace("{DATABASE}", db_name);

builder.Services.AddDbContext<AppDbContext>(options =>
        options.UseNpgsql(connectionString));


builder.Services.AddCors(options => {
    options.AddDefaultPolicy(
        builder => {
            // FIXME: remove localhost:3000 cors 
            builder.WithOrigins("http://nginx-service:80", "http://localhost", "http://localhost:3000")
                .AllowCredentials()
                .AllowAnyMethod()
                .AllowAnyHeader();
    });
});



builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve;
    });

var app = builder.Build();

if (!app.Environment.IsDevelopment()) {

    app.UseExceptionHandler("/Error");
    app.UseHsts();
    app.UseHttpsRedirection();
}


app.MapGet("/ping", () => {

    Console.WriteLine($"[{DateTime.Now}] PING \"GET /ping \" 200");
    return "OK ALPHA 01";
});

app.UseSession();

app.UseRouting();

app.UseCors();

app.MapControllers();

app.Run();
