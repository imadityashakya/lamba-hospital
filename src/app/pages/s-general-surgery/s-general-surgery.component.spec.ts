import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SGeneralSurgeryComponent } from './s-general-surgery.component';

describe('SGeneralSurgeryComponent', () => {
  let component: SGeneralSurgeryComponent;
  let fixture: ComponentFixture<SGeneralSurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SGeneralSurgeryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SGeneralSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
