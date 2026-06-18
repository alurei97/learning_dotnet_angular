import { Routes } from '@angular/router';
import { GameList } from './features/game-list/game-list';

export const routes: Routes = [
    { path: 'games', component: GameList },
];
