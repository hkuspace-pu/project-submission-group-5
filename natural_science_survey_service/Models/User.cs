using System.ComponentModel.DataAnnotations.Schema;
namespace NSSService.Models;

[Table("Users")]
public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string UserType { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
}
