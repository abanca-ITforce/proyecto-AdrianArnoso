import { TestBed } from '@angular/core/testing';

import { ExploradorService } from './explorador.service';

describe('ExploradorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExploradorService = TestBed.get(ExploradorService);
    expect(service).toBeTruthy();
  });
});
