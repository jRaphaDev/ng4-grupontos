import { OffersService } from './../../shared/offers.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.css'],
  providers: [ OffersService ]
})
export class HowToUseComponent implements OnInit {

  private howToUse: string;

  constructor(
    private route: ActivatedRoute,
    private offerService: OffersService
  ) { }

  ngOnInit() {
    this.offerService.getHowToUseOfferById(this.route.parent.snapshot.params['id'])
      .then((response: string) => this.howToUse = response);
  }

}
