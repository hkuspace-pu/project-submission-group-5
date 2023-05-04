using NSSService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace NSSService.Controllers;

[ApiController]
[Route("[controller]")]
public class NewsController : ControllerBase
{
    private readonly NSSServiceContext _context;
    public NewsController(NSSServiceContext context)
    {
        _context = context;
    }

    // GET all action
    [HttpGet]
    public async Task<ActionResult<IEnumerable<News>>> GetAll()
    {
        return await _context.News
            .Select(x => x)
            .ToListAsync();
    }

    // GET by Id action
    [HttpGet("{id}")]
    public async Task<ActionResult<News>> GetNewsById(int id)
    {
        var news = await _context.News.FindAsync(id);

        if (news == null)
        {
            return NotFound();
        }

        return news;
    }

}