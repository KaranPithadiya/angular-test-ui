import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductType,ProductTypeObj } from './product-type';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { 
    
  }
  public async getProduce(page:number,limit:number) : Promise<Observable<any>>  {
    try{
      const api = 'http://localhost:3000/products';
      return this.http.get(api, {
        params: {
          _page: page.toString(),
          _limit: limit.toString()
        }
      });

    }catch (e){
      console.log('getProduce:',e);
      return e;
    }
  }
}
