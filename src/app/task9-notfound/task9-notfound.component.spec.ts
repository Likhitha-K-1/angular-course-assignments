import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task9NotfoundComponent } from './task9-notfound.component';

describe('Task9NotfoundComponent', () => {
  let component: Task9NotfoundComponent;
  let fixture: ComponentFixture<Task9NotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task9NotfoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task9NotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
