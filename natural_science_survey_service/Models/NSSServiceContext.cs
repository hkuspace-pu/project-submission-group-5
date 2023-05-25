using Microsoft.EntityFrameworkCore;
namespace NSSService.Models;

public class NSSServiceContext : DbContext
{
    public NSSServiceContext(DbContextOptions<NSSServiceContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; } = null!;
    public DbSet<News> News { get; set; } = null!;
    public DbSet<Record> Records { get; set; } = null!;
    public DbSet<Species> Species { get; set; } = null!;
    public DbSet<Comment> Comment { get; set; } = null!;
}