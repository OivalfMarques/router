import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeauthComponent } from './fakeauth.component';

describe('FakeauthComponent', () => {
  let component: FakeauthComponent;
  let fixture: ComponentFixture<FakeauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeauthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
