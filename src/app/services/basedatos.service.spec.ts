import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { BasedatosService } from './basedatos.service';

describe('BasedatosService', () => {
  let service: BasedatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasedatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
