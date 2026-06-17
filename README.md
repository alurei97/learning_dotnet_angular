# learning_dotnet_angular
Small project to learn .NET and Angular.

---

First, with free Claude Sonnet 4.6 I asked about ideas for a small project to learn .NET and Angular, it gave me this project idea and future improvements.

I'm also experimenting with vscode containers for the first time. I found one that includes .NET and Node so I don't have to install them directly on my pc. So the `Dev Containers` extension is needed when cloning the code.

Then in vscode, I gave this prompt to OpenCode Nemotron 3 Ultra free (doesn't work perfectly because sometimes it spoils code):
```
Act as an interactive tutor for .NET Web API and Angular. I'm a Flutter developer with 5y of experience. Teach me one concept at a time: explain it briefly, show a minimal example, then give me an exercise to do myself. Wait for me to attempt it before moving on. Don't give me the solution unless I ask for a hint.

In the readme Ive added a basic project we can create together. Feel free to make changes to it.

First, Is there a command to init a .net project with some basic info/scaffold?
```
---

Backend: in `/backend/MiniBacklog` -> `dotnet run` -> available in port `5095`

Frontend: in `/frontend/mini-backlog` -> `ng serve --host 0.0.0.0` -> available in port `4200`

---
---
---

# Project idea: Mini Backlog

A personal backlog to add and delete titles (games). Built with .NET REST API + Angular.

---

## Phase 1 — .NET API
- [x] Create Web API project inside `/backend`
- [x] Create `GamesController`
- [x] Store games in a static `List<Game>` in memory (no database)
- [x] `GET /api/games` — return all games
- [x] `GET /api/games` - return single game by id
- [x] `POST /api/games` — add a new game
- [x] `PUT /api/games` - update a game
- [x] `DELETE /api/games/{id}` — delete a game by id
- [x] Enable CORS so Angular can talk to it

## Phase 2 — Angular Setup
- [x] Create Angular project inside `/frontend` with `ng new`
- [x] Generate `Game` model
- [x] Generate `GamesService` using `HttpClient`
- [x] Add a `getGames()` method
- [x] Add a `getGameById()` method
- [x] Add a `addGame()` method
- [x] Add a `updateGame()` method  
- [x] Add a `deleteGame()` method

## Phase 3 — Angular Component
- [ ] Create a component with a list of games (`*ngFor`)
- [ ] Add a text input + button to add a new game
- [ ] Add a delete button per game

## Phase 4 — Wire It Up
- [ ] Run both projects (two terminals)
- [ ] Fix any CORS errors
- [ ] Test full loop: add → appears in list → delete → gone

---

## V2 — Database
- [ ] Add a `MediaEntry` model with `Title`, `Type`, `Status`, `Score`, `Notes`
- [ ] Set up EF Core with SQLite
- [ ] Replace in-memory `List<>` with a real `DbContext`
- [ ] Add and run migrations

## V3 — GraphQL
- [ ] Replace REST endpoints with GraphQL using HotChocolate
- [ ] Add a Query type (`items`, `item(id)`)
- [ ] Add a Mutation type (`addItem`, `deleteItem`, `updateItem`)
- [ ] Update Angular service to use GraphQL queries instead of REST calls

## V4 — Angular Improvements
- [ ] Add routing (list view / detail view)
- [ ] Reactive form with validation for adding items (required title, score 1–10)
- [ ] Filter items by status
- [ ] Sort items by score or title

## V5 — Auth
- [ ] Add JWT authentication to the .NET API
- [ ] Login/register endpoints
- [ ] Protect routes in Angular with an auth guard
- [ ] Store token in Angular and send it in request headers
- [ ] Move CORS to `appsettings.json`

## V6 — Polish
- [ ] Add Angular Material or a CSS framework
- [ ] Loading states and error handling
- [ ] Pagination or infinite scroll
- [ ] Unit tests for the API controller
- [ ] Unit tests for the Angular service