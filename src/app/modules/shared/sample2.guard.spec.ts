import { TestBed } from '@angular/core/testing';

import { Sample2Guard } from './sample2.guard';

describe('Sample2Guard', () => {
  let guard: Sample2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Sample2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
