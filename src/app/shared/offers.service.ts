import { URL_API_OFFER, URL_API_HOW_TO_USE, URL_API_WHERE_IS } from './../app.api';
import { Offer } from '../shared/offer.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OffersService {

  constructor(private http: Http){}

  public offers: Offer[] = [];

  public getOffers(): Promise<Offer[]> {
    return this.http.get(URL_API_OFFER)
      .toPromise()
      .then((response: any) => response.json());
  }

  public getOffersByCategory(category: string): Promise<Offer[]> {
    return this.http.get(`${URL_API_OFFER}?categoria=${category}`)
      .toPromise()
      .then((response: any) => response.json());
  }

  public getOfferById(id: number): Promise<Offer> {
    return this.http.get(`${URL_API_OFFER}/${id}`)
      .toPromise()
      .then((response: any) => response.json());
  }

  public getHowToUseOfferById(id: number): Promise<string> {
    return this.http.get(`${URL_API_HOW_TO_USE}/${id}`)
      .toPromise()
      .then((response: any) => response.json().descricao);
  }

  public getWhereIsById(id: number): Promise<string> {
    return this.http.get(`${URL_API_WHERE_IS}/${id}`)
      .toPromise()
      .then((response: any) => response.json().descricao);
  }

}