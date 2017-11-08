import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { OrderService } from './order-service.model';
import { URL_API_ORDER_SERVICE } from '../app.api';

@Injectable()
export class OrderServiceService {

  constructor(private http: Http) { }
  
  public buy(order: OrderService): Observable<any> {
      console.log('cheguei', order)

      let headers: Headers = new Headers();
      headers.append('Content-type', 'application-json');

      return this.http.post(URL_API_ORDER_SERVICE,
          JSON.stringify(order),
          new RequestOptions({ headers: headers })
      ).map((res: Response) => {
        console.log(res.json());
      })
  }
}