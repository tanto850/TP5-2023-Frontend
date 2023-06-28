import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormticketComponent } from './formticket.component';

describe('FormticketComponent', () => {
  let component: FormticketComponent;
  let fixture: ComponentFixture<FormticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
