import { URL_API_OFFER, URL_API_HOW_TO_USE, URL_API_WHERE_IS } from './../app.api';
import { Offer } from '../shared/offer.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OffersService {

  constructor(private http: Http){}

  public offers: Offer[] = [];

  public getOffers(): Promise<Offer[]> {
    return this.http.get(URL_API_OFFER)
      .toPromise()
      .then((response: Response) => response.json());
  }

  public getOffersByCategory(category: string): Promise<Offer[]> {
    return this.http.get(`${URL_API_OFFER}?categoria=${category}`)
      .toPromise()
      .then((response: Response) => response.json());
  }

  public getOfferById(id: number): Promise<Offer> {
    return this.http.get(`${URL_API_OFFER}/${id}`)
      .toPromise()
      .then((response: Response) => response.json());
  }

  public getHowToUseOfferById(id: number): Promise<string> {
    return this.http.get(`${URL_API_HOW_TO_USE}/${id}`)
      .toPromise()
      .then((response: Response) => response.json().descricao);
  }

  public getWhereIsById(id: number): Promise<string> {
    return this.http.get(`${URL_API_WHERE_IS}/${id}`)
      .toPromise()
      .then((response: Response) => response.json().descricao);
  }

  public searchOffer(name: string): Observable<Offer[]> {
    return this.http.get(`${URL_API_OFFER}?descricao_oferta_like=${name}`)
      .retry(5)
      .map((response: Response) => response.json());
  }

}