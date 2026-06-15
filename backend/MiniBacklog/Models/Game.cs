namespace MiniBacklog.Models;

public class Game
{
    public int Id { get; set; }
    required public string Title { get; set; }
    required public string Creator { get; set; }
    required public int Year { get; set; }
}
