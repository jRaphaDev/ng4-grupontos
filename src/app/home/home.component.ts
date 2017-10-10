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

    //this.offers = this.offersService.getOffers();

    this.offersService.getOffersPromise()
      .then((offers: Offer[]) => {
        console.log(' req de 3s ')
        this.offers = offers
      })
      .catch(err => console.log(err) )

    console.log(this.offers);
  }

}
