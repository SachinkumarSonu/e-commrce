import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoustomerCareComponent } from './coustomer-care.component';

describe('CoustomerCareComponent', () => {
  let component: CoustomerCareComponent;
  let fixture: ComponentFixture<CoustomerCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoustomerCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoustomerCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
