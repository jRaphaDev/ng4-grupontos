import { WhereIsComponent } from './offer/where-is/where-is.component';
import { HowToUseComponent } from './offer/how-to-use/how-to-use.component';
import { OfferComponent } from './offer/offer.component';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { OrderServiceComponent } from './order-service/order-service.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'offer/:id', component: OfferComponent,
    children: [
      { path: '', component: HowToUseComponent },
      { path: 'how-to-use', component: HowToUseComponent },
      { path: 'where-is', component: WhereIsComponent }
    ]
  },
  { path: 'order-service', component: OrderServiceComponent }
];