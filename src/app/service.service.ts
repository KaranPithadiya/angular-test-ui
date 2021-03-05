import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { 
    
  }
  public async getProduce() : Promise<Observable<any>>  {
    try{
      const api = 'http://localhost:3000/products';
      return await this.http.get(api);

    }catch (e){
      console.log('getProduce:',e);
    }
  }
}
