import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnchagesComponent } from './ng-onchages.component';

describe('NgOnchagesComponent', () => {
  let component: NgOnchagesComponent;
  let fixture: ComponentFixture<NgOnchagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgOnchagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgOnchagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
