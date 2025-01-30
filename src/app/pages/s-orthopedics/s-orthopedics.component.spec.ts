import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SOrthopedicsComponent } from './s-orthopedics.component';

describe('SOrthopedicsComponent', () => {
  let component: SOrthopedicsComponent;
  let fixture: ComponentFixture<SOrthopedicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SOrthopedicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SOrthopedicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
