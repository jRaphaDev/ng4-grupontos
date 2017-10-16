import { Offer } from './../shared/offer.model';
import { OffersService } from './../shared/offers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css'],
  providers: [ OffersService ]
})
export class EntertainmentComponent implements OnInit {

  private offers: Offer[];

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offersService.getOffersByCategory('diversao')
      .then((offers: Offer[]) => this.offers = offers)
      .catch(err => console.log(err));
  }

}
