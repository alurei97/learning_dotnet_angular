import { Component, inject, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CreateGameDto, Game } from '../../core/models/game.model';
import { GamesService } from '../../core/services/games.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-game-list',
  imports: [FormsModule],
  templateUrl: './game-list.html',
  styleUrl: './game-list.css',
})
export class GameList {
  private readonly cdr = inject(ChangeDetectorRef);
  public readonly gameService = inject(GamesService);
  @ViewChild('gameForm') gameForm!: NgForm;
  games: Game[] = [];
  // Form model - year as string so it can be empty initially
  newGame: { title: string; creator: string; year: string } = { title: '', creator: '', year: '' };

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
    this.newGame = { title: '', creator: '', year: '' };
    // Reset form validation state (touched, dirty, etc.) to hide error messages
    if (this.gameForm) {
      this.gameForm.resetForm();
    }
  }

  addGame(): void {
    const dto: CreateGameDto = {
      title: this.newGame.title,
      creator: this.newGame.creator,
      year: Number(this.newGame.year)
    };
    this.gameService.addGame(dto)
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
