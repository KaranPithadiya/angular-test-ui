import { Component } from '@angular/core';
import { ProductType } from './product-type';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-ui';
  public product_data :Array<ProductType>;
  public page : number;
  private pageLimit : number;
  constructor(public ServiceFile: ServiceService) {
    this.product_data = [];
    this.page = 1;
    this.pageLimit = 15;
  }
  displayedColumns: string[] = ['date','face','id','price','size'];
  
  ngOnInit() {
    this.getProduce();
  }
  public async getProduce(): Promise<void> {

     await this.ServiceFile.getProduce(this.page,this.pageLimit).then((res)=>{
      res.subscribe(async v => {
        this.product_data = v;
        console.log('this.product_data',this.product_data);
      })
    });
   
    // this.Service.getAll().subscribe((results) => {
    //   console.log('Data is received - Result - ', results);
    //   // this.data = results.results;
    // })
}
public scroll(e):void{
console.log('e',e)
}

}
