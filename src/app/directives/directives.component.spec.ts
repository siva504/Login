import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesComponent } from './directives.component';
import { FormsModule } from '@angular/forms';

describe('DirectivesComponent', () => {
  let component: DirectivesComponent;
  let fixture: ComponentFixture<DirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule
      ],
      declarations: [DirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
