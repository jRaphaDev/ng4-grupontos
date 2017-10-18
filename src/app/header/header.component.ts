import { Component, OnInit } from '@angular/core';

import { OffersService } from '../shared/offers.service';
import { Offer } from '../shared/offer.model';

import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

import '../util/rxjs-extensions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ OffersService ]
})
export class HeaderComponent implements OnInit {

  public offers: Observable<Offer[]>;
  public offersList: Offer[];
  private subjectSearch: Subject<string> = new Subject<string>();

  constructor(private offerService: OffersService) { }

  ngOnInit() {

    this.offers = this.subjectSearch
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((search: string) => {
        console.log('requisicao http api', search);

        if(search.trim() === '') {
          return Observable.of<Offer[]>([]);
        }
        return this.offerService.searchOffer(search);

      })
      .catch((err: any) => {
        console.log(err)
        return Observable.of<Offer[]>([]);
      });

    this.offers.subscribe((offers: Offer[]) => {
      this.offersList = offers;
    });
  }

  public search(searchField: string): void {
    console.log('key up caractherr: ', searchField);
    this.subjectSearch.next(searchField)
  }

}
