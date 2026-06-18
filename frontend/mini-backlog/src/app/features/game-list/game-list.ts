import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CreateGameDto, Game } from '../../core/models/game.model';
import { GamesService } from '../../core/services/games.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-list',
  imports: [FormsModule],
  templateUrl: './game-list.html',
  styleUrl: './game-list.css',
})
export class GameList {
  private readonly cdr = inject(ChangeDetectorRef);
  public readonly gameService = inject(GamesService);
  games: Game[] = [];
  newGame: CreateGameDto = { title: '', creator: '', year: 0 };

  ngOnInit(): void {
    this.load();
  }

  private load(): void {
    this.getAllGames();
    this.resetForm();
  }

  private getAllGames(): void {
    this.gameService.getGames().subscribe({
      next: (games) => {
        this.games = games;
        this.cdr.detectChanges();
      },
      error: (err) => alert('Failed to load games: ' + err.message),
    });
  }

  private resetForm(): void {
    this.newGame = { title: '', creator: '', year: 0 };
  }

  addGame(): void {
    this.gameService.addGame(this.newGame)
      .subscribe({
        next: () => this.load(),
        error: (err) => alert('Failed to add game: ' + err.message),
      });
  }

  deleteGame(id: number): void {
    this.gameService.deleteGame(id)
      .subscribe({
        next: () => this.load(),
        error: (err) => alert('Failed to delete: ' + err.message),
      });
  }
}
