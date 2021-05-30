import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyCreateComponent } from './study-create.component';

describe('StudyCreateComponent', () => {
  let component: StudyCreateComponent;
  let fixture: ComponentFixture<StudyCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
