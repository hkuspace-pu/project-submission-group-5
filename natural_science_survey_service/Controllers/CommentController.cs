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
    public async Task<ActionResult<IEnumerable<Comment>>> GetCommentRecordById(int id)
    {
        var comments = await _context.Comment
        .Where(c => c.RecordID == id)
        .ToListAsync();

        if (comments == null)
        {
            return NotFound();
        }

        return comments;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Comment comment)
    {
        var id = await _context.Comment.CountAsync();
        comment.CommentID = id + 1;
        var newComment = new Comment
        {
            UserID = comment.UserID,
            RecordID = comment.RecordID,
            Content = comment.Content,
            Rating = comment.Rating,
            UpdatedAt = DateTime.Now,
            CreatedAt = DateTime.Now
        };

        _context.Comment.Add(newComment);
        await _context.SaveChangesAsync();
        return Ok(new { newComment });
    }

}