import { Component, inject } from '@angular/core';
import { Game } from '../../core/models/game.model';
import { GamesService } from '../../core/services/games.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-list',
  imports: [FormsModule],
  templateUrl: './game-list.html',
  styleUrl: './game-list.css',
})
export class GameList {
  public readonly gameService = inject(GamesService);
  games: Game[] = [];
  newGame: Partial<Game> = {};

  ngOnInit(): void {
    this.load();
  }

  private load(): void {
    this.getAllGames();
    this.resetForm();
  }

  private getAllGames(): void {
    this.gameService.getGames().subscribe((games) => this.games = games);
  }

  private resetForm(): void {
    this.newGame = { id: 0, title: '', creator: '', year: 0 };
  }

  addGame(): void {
    this.gameService.addGame(this.newGame as Game)
      .subscribe(() => this.load());
  }

  deleteGame(id: number): void {
    this.gameService.deleteGame(id)
      .subscribe(() => this.load());
  }
}
