using CVP360.Models;
using Microsoft.EntityFrameworkCore;

namespace CVP360.dbContext;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options) {
    public DbSet<UserModel> Users{ get; set; }
    public DbSet<Profile> Profiles{ get; set; }
    public DbSet<Category> Categories{ get; set; }
    public DbSet<Project> Projects{ get; set; }
    public DbSet<CreditCard> CreditCards{ get; set; }
}