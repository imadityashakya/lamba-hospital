import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SOphthalmologyComponent } from './s-ophthalmology.component';

describe('SOphthalmologyComponent', () => {
  let component: SOphthalmologyComponent;
  let fixture: ComponentFixture<SOphthalmologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SOphthalmologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SOphthalmologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
