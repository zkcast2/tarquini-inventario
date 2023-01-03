import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonedetailComponent } from './phonedetail.component';

describe('PhonedetailComponent', () => {
  let component: PhonedetailComponent;
  let fixture: ComponentFixture<PhonedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
