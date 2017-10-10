import { Offer } from '../shared/offer.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OffersService {

  constructor(private http: Http){}

  public offers: Offer[] = [];

  public getOffers(): Promise<Offer[]> {
    return this.http.get('http://localhost:3000/ofertas')
      .toPromise()
      .then((response: any) => response.json());
  }

  public getOffersByCategory(category: string): Promise<Offer[]> {
    return this.http.get(`http://localhost:3000/ofertas?categoria=${category}`)
      .toPromise()
      .then((response: any) => response.json());
  }

}