import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-service-success',
  templateUrl: './order-service-success.component.html',
  styleUrls: ['./order-service-success.component.css']
})
export class OrderServiceSuccessComponent implements OnInit {

  @Input() idOrderService: number;

  constructor() { }

  ngOnInit() {}

}
