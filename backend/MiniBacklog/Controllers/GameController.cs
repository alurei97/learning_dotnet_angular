using MiniBacklog.Models;
using Microsoft.AspNetCore.Mvc;

namespace MiniBacklog.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GamesController : ControllerBase
{
    private static readonly List<Game> games =
    [
        new Game
        {
            Id= 1,
            Title= "Zelda",
            Creator="Nintendo",
            Year= 1997,
        }
    ];

    [HttpGet]
    public ActionResult<List<Game>> GetGames()
    {
        return Ok(games);
    }

    [HttpGet("{id:int}")]
    public ActionResult<Game> GetGameById(int id)
    {
        Game? game = games.FirstOrDefault(g => g.Id == id);
        if (game == null) return NotFound();
        return Ok(game);
    }

    [HttpPost]
    public ActionResult<Game> AddGame(Game g)
    {
        if (g == null) return BadRequest();

        games.Add(g);
        // return Created();
        // return Ok(GetGameById(g.Id));
        return CreatedAtAction(nameof(GetGameById), new { id = g.Id }, g);
    }

    [HttpPut("{id:int}")]
    public IActionResult UpdateGame(int id, Game updatedGame)
    {
        if (updatedGame == null) return BadRequest();

        Game? game = games.FirstOrDefault(g => g.Id == id);
        if (game == null) return NotFound();

        game.Id = updatedGame.Id;
        game.Title = updatedGame.Title;
        game.Creator = updatedGame.Creator;
        game.Year = updatedGame.Year;
        // return NoContent();
        return Ok(updatedGame);
    }

    [HttpDelete("{id:int}")]
    public IActionResult DeleteGame(int id)
    {
        Game? game = games.FirstOrDefault(g => g.Id == id);
        if (game == null) return NotFound();

        games.Remove(game);
        return NoContent();
    }
}