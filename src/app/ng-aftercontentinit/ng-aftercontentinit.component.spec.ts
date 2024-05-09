import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAftercontentinitComponent } from './ng-aftercontentinit.component';

describe('NgAftercontentinitComponent', () => {
  let component: NgAftercontentinitComponent;
  let fixture: ComponentFixture<NgAftercontentinitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgAftercontentinitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgAftercontentinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
