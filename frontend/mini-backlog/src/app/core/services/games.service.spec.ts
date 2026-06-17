import { TestBed } from '@angular/core/testing';

import { GamesService } from '../services/games.service';

describe('Games', () => {
  let service: GamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
