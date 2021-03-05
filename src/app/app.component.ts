import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-ui';

  constructor(public ServiceFile: ServiceService) {}

  public async getProduce() {

     await this.ServiceFile.getProduce().then((res)=>{
      res.subscribe(async v => {
        console.log(v);
      })
    });
   
    // this.Service.getAll().subscribe((results) => {
    //   console.log('Data is received - Result - ', results);
    //   // this.data = results.results;
    // })
}
}
