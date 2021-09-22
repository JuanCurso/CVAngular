import { TestBed } from '@angular/core/testing';

import { ReclamacionesService } from './reclamaciones.service';

describe('ReclamacionesService', () => {
  let service: ReclamacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
