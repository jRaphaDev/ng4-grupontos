import { Offer } from './../shared/offer.model';
import { OffersService } from './../shared/offers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Observer } from "rxjs/Observer";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [ OffersService ]
})
export class OfferComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private offerService: OffersService) { }

  private offer: Offer;

  ngOnInit() {
    this.offerService.getOfferById(this.route.snapshot.params['id'])
      .then((offer: Offer) => this.offer = offer);

    //observavel
    let myObservable = Observable.create((observer: Observer<number>) => {
      observer.next(1)
      observer.complete()
      observer.error('some err was found')
    })

    //observador
    myObservable.subscribe(
      (result: any) => console.log(result + 10),
      (err: any) => console.log(err),
      () =>  console.log('completed')
    )

  }

}
