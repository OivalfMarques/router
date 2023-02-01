import { TestBed } from '@angular/core/testing';

import { Sample2Resolver } from './sample2.resolver';

describe('Sample2Resolver', () => {
  let resolver: Sample2Resolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(Sample2Resolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
