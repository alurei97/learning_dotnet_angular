export interface Game {
    id: number;
    title: string;
    creator: string;
    year: number;
}

export interface CreateGameDto {
    title: string;
    creator: string;
    year: number;
}