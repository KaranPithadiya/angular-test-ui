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
  public getProduce(page:number,limit:number,sort:string) : Observable<ProductType[]>  {
    try{
      const api = 'http://localhost:3000/products';
      return this.http.get<ProductType[]>(api, {
        params: {
          _page: page.toString(),
          _limit: limit.toString(),
          _sort : sort,
        }
      });

    }catch (e){
      console.log('getProduce:',e);
      return e;
    }
  }
}
