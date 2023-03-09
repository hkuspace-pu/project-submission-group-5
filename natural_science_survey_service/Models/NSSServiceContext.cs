using Microsoft.EntityFrameworkCore;
using System.Data.SqlClient;

namespace NSSService.Models;

public class NSSServiceContext : DbContext
{
    public NSSServiceContext(DbContextOptions<NSSServiceContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; } = null!;
}