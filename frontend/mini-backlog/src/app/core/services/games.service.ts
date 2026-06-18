import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateGameDto, Game } from '../models/game.model';

@Service()
export class GamesService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = 'http://localhost:5095/api/games';

    getGames(): Observable<Game[]> {
        return this.http.get<Game[]>(this.apiUrl);
    }

    getGameById(id: number): Observable<Game> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Game>(url);
    }

    addGame(game: CreateGameDto): Observable<Game> {
        return this.http.post<Game>(this.apiUrl, game);
    }

    updateGame(game: Game): Observable<Game> {
        const url = `${this.apiUrl}/${game.id}`;
        return this.http.put<Game>(url, game);
    }

    deleteGame(id: number): Observable<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<void>(url);
    }
}
