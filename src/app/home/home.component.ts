import { Component, OnInit } from '@angular/core';
import { OffersService } from '../shared/offers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OffersService]
})
export class HomeComponent implements OnInit {

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    console.log(this.offersService.getOffers());
  }

}
