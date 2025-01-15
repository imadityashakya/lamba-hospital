import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCardCarouselComponent } from './multi-card-carousel.component';

describe('MultiCardCarouselComponent', () => {
  let component: MultiCardCarouselComponent;
  let fixture: ComponentFixture<MultiCardCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiCardCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiCardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
