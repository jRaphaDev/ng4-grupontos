import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderServiceService } from '../shared/order-service.service';
import { OrderService } from '../shared/order-service.model';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-order-service',
  templateUrl: './order-service.component.html',
  styleUrls: ['./order-service.component.css'],
  providers: [ OrderServiceService ]
})
export class OrderServiceComponent implements OnInit {

    @ViewChild('myForm') public form: NgForm

    constructor(private orderServiceService: OrderServiceService) { }

    ngOnInit() {}

    public confirmBuy(): void {
        console.log(this.form);
    }

}
