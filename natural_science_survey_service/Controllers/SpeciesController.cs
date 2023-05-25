using NSSService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace NSSService.Controllers;

[ApiController]
[Route("[controller]")]
public class SpeciesController : ControllerBase
{
    private readonly NSSServiceContext _context;
    public SpeciesController(NSSServiceContext context)
    {
        _context = context;
    }

    // GET all action
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Species>>> GetAll()
    {
        return await _context.Species
            .Select(x => x)
            .ToListAsync();
    }

    // GET by Id action
    [HttpGet("{id}")]
    public async Task<ActionResult<Species>> GetSpeciesById(int id)
    {
        var species = await _context.Species.FindAsync(id);

        if (species == null)
        {
            return NotFound();
        }

        return species;
    }

}