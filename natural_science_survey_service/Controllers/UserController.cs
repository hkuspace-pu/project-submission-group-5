using NSSService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using System.Text;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
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
            new Claim("Id", user.Id.ToString()),
            new Claim("UserType", user.UserType),
            new Claim("Email", user.Email),
            new Claim("Password", user.Password),
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

}