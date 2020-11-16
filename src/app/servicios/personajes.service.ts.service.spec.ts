import { TestBed } from '@angular/core/testing';

import { Personajes.Service.TsService } from './personajes.service.ts.service';

describe('Personajes.Service.TsService', () => {
  let service: Personajes.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Personajes.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
