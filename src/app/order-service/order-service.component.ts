import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../shared/order-service.service';
import { OrderService } from '../shared/order-service.model';

@Component({
  selector: 'app-order-service',
  templateUrl: './order-service.component.html',
  styleUrls: ['./order-service.component.css'],
  providers: [ OrderServiceService ]
})
export class OrderServiceComponent implements OnInit {

    public address: string = '';
    public number: string = '';
    public complement: string = '';
    public payWay: string = '';

    public addressValid: boolean;
    public numberValid: boolean;
    public complementValid: boolean;
    public payWayValid: boolean;

    public addressPristine: boolean = true;
    public numberPristine: boolean = true;
    public complementPristine: boolean = true;
    public payWayPristine: boolean = true;

    public formValid: string = 'disabled';
    private idOrderService: number;

    constructor(private orderServiceService: OrderServiceService) { }

    ngOnInit() {
    }

    updateAddress(address: string): void {
        this.address = address;
        this.addressPristine = false;
        this.addressValid = (this.address.length > 3) ? true : false;
        this.enabledForm();
    }

    updateNumber(number: string): void {
        this.number = number;
        this.numberPristine = false;
        this.numberValid = (this.number.length > 0) ? true : false;
        this.enabledForm();
    }

    updateComplement(complement: string): void {
        this.complement = complement;
        this.complementPristine = false
        this.complementValid = (this.complement.length > 3) ? true : false;
        this.enabledForm();
    }

    updatePayWay(payWay: string): void {
        this.payWay = payWay;
        this.payWayPristine = false;
        this.payWayValid = (this.payWay.length > 0) ? true : false;
        this.enabledForm();
    }

    enabledForm(): void {
        this.formValid =
        ( this.addressValid && this.numberValid && this.payWayValid ) ? '' : 'disabled';
    }

    confirmBuy(): void {

        let orderService = new OrderService(
          this.address,
          this.number,
          this.complement,
          this.payWay);

        this.orderServiceService.buy(orderService)
          .subscribe((idOrderService: number) =>{
              console.log(idOrderService)
            this.idOrderService = idOrderService;
          });
    }

}
