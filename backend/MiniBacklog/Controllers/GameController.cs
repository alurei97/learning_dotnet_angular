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
    public ActionResult<Game> AddGame(CreateGameDto dto)
    {
        if (dto == null) return BadRequest();

        var game = new Game
        {
            Id = games.Count > 0 ? games.Max(x => x.Id) + 1 : 1,
            Title = dto.Title,
            Creator = dto.Creator,
            Year = dto.Year,
        };

        games.Add(game);
        return CreatedAtAction(nameof(GetGameById), new { id = game.Id }, game);
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