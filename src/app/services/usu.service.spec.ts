import { TestBed } from '@angular/core/testing';

import { UsuServiceService } from './usu.service';

describe('UsuServiceService', () => {
  let service: UsuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
