import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNeuropsychiatryComponent } from './s-neuropsychiatry.component';

describe('SNeuropsychiatryComponent', () => {
  let component: SNeuropsychiatryComponent;
  let fixture: ComponentFixture<SNeuropsychiatryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SNeuropsychiatryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SNeuropsychiatryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
