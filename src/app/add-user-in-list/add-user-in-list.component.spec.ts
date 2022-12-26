import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserInListComponent } from './add-user-in-list.component';

describe('AddUserInListComponent', () => {
  let component: AddUserInListComponent;
  let fixture: ComponentFixture<AddUserInListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserInListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
