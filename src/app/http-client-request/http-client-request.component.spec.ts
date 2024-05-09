import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientRequestComponent } from './http-client-request.component';

describe('HttpClientRequestComponent', () => {
  let component: HttpClientRequestComponent;
  let fixture: ComponentFixture<HttpClientRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpClientRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpClientRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
