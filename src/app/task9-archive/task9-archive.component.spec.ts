import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task9ArchiveComponent } from './task9-archive.component';

describe('Task9ArchiveComponent', () => {
  let component: Task9ArchiveComponent;
  let fixture: ComponentFixture<Task9ArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task9ArchiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task9ArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
