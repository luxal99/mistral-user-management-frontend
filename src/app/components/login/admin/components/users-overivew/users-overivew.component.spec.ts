import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersOverivewComponent } from './users-overivew.component';

describe('UsersOverivewComponent', () => {
  let component: UsersOverivewComponent;
  let fixture: ComponentFixture<UsersOverivewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersOverivewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersOverivewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
