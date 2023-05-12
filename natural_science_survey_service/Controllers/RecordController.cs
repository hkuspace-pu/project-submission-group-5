using NSSService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace NSSService.Controllers;

[ApiController]
[Route("[controller]")]
public class RecordController : ControllerBase
{
    private readonly NSSServiceContext _context;
    public RecordController(NSSServiceContext context)
    {
        _context = context;
    }

    // GET all action
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Record>>> GetAll()
    {
        return await _context.Records
            .Select(x => x)
            .ToListAsync();
    }

    // GET by Id action
    [HttpGet("{id}")]
    public async Task<ActionResult<Record>> GetRecordById(int id)
    {
        var record = await _context.Records.FindAsync(id);

        if (record == null)
        {
            return NotFound();
        }

        return record;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Record record)
    {
        var id = await _context.Records.CountAsync();
        record.RecordID = id + 1;
        _context.Records.Add(record);
        await _context.SaveChangesAsync();
        return Ok(new { record });
    }

}