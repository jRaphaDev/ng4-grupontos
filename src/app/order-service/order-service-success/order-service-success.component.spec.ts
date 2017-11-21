import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderServiceSuccessComponent } from './order-service-success.component';

describe('OrderServiceSuccessComponent', () => {
  let component: OrderServiceSuccessComponent;
  let fixture: ComponentFixture<OrderServiceSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderServiceSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderServiceSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
