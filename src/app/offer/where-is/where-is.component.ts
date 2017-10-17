import { OffersService } from './../../shared/offers.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-where-is',
  templateUrl: './where-is.component.html',
  styleUrls: ['./where-is.component.css']
})
export class WhereIsComponent implements OnInit {

  private whereIs: string;

  constructor(
    private route: ActivatedRoute,
    private offerService: OffersService) { }

  ngOnInit() {
    this.offerService.getWhereIsById(this.route.parent.snapshot.params['id'])
      .then((response: string) => this.whereIs = response);
  }

}
