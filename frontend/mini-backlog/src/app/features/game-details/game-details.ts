import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../core/services/games.service';
import { Game } from '../../core/models/game.model';

@Component({
  selector: 'app-game-details',
  imports: [],
  templateUrl: './game-details.html',
  styleUrl: './game-details.css',
})
export class GameDetails {
  private route = inject(ActivatedRoute);
  private readonly cdr = inject(ChangeDetectorRef);
  public readonly gameService = inject(GamesService);

  gameId: number | undefined;
  game: Game | undefined;

  ngOnInit(): void {
    this.gameId = Number(this.route.snapshot.paramMap.get('id'));
    this.load();
  }

  private load(): void {
    this.gameService.getGameById(this.gameId!)
      .subscribe({
        next: (game) => {
          this.game = game;
          this.cdr.detectChanges();
        },
        error: (err) => alert('Failed to load game: ' + err.message),
      });
  }
}
