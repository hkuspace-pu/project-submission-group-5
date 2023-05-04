using NSSService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;

namespace NSSService.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly NSSServiceContext _context;
    private readonly IConfiguration _config;

    public UserController(NSSServiceContext context, IConfiguration config)
    {
        _context = context;
        _config = config;
    }

    [HttpPost]
    [Route("login")]
    public async Task<IActionResult> Login([FromBody] User user)
    {
        // Create a claims list for the JWT
        var claims = new List<Claim>
        {
            new Claim(JwtRegisteredClaimNames.Sub, user.Email),
            new Claim("id", user.UserID.ToString()),
            new Claim("type", user.UserType),
            new Claim("email", user.Email),
            new Claim("password", user.Password),
        };

        // Create a security key
        var jwtKey = _config.GetValue<string>("Jwt:Key");
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));

        // Create a signing credentials object
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var jwtIssuer = _config.GetValue<string>("Jwt:Issuer");
        var jwtAudience = _config.GetValue<string>("Jwt:Audience");

        // Create a JWT token
        var token = new JwtSecurityToken(
            jwtIssuer,
            jwtAudience,
            claims,
            expires: DateTime.Now.AddDays(30),
            signingCredentials: creds);

        // Return the JWT token as the result
        return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token) });
    }

    // GET all action
    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetAll()
    {
        return await _context.Users
            .Select(x => x)
            .ToListAsync();
    }

}