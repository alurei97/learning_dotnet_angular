import { Routes } from '@angular/router';
import { GameList } from './features/game-list/game-list';
import { GameDetails } from './features/game-details/game-details';

export const routes: Routes = [
    { path: 'games', component: GameList },
    { path: 'game/:id', component: GameDetails }
];
