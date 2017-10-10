import { Component, OnInit } from '@angular/core';
import { OffersService } from '../shared/offers.service';
import { Offer } from '../shared/offer.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OffersService]
})
export class HomeComponent implements OnInit {

  constructor(private offersService: OffersService) { }

  public offers: Offer[];

  ngOnInit() {

    this.offersService.getOffers()
      .then((offers: Offer[]) => {
        this.offers = offers
      })
      .catch(err => console.log(err))
  }

}
