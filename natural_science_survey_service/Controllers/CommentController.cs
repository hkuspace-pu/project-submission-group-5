using NSSService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace NSSService.Controllers;

[ApiController]
[Route("[controller]")]
public class CommentController : ControllerBase
{
    private readonly NSSServiceContext _context;
    public CommentController(NSSServiceContext context)
    {
        _context = context;
    }

    // GET all action
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Comment>>> GetAll()
    {
        return await _context.Comment
            .Select(x => x)
            .ToListAsync();
    }

    // GET by Id action
    [HttpGet("{id}")]
    public async Task<ActionResult<Comment>> GetCommentById(int id)
    {
        var comment = await _context.Comment.FindAsync(id);

        if (comment == null)
        {
            return NotFound();
        }

        return comment;
    }

}