import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantComponent},
  { path: 'entertainment', component: EntertainmentComponent}
];