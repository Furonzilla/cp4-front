import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditIdeaComponent } from './form-edit-idea.component';

describe('FormEditIdeaComponent', () => {
  let component: FormEditIdeaComponent;
  let fixture: ComponentFixture<FormEditIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditIdeaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
