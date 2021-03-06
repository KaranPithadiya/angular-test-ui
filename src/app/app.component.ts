import { Component, ViewChild } from '@angular/core';
import { ProductType } from './product-type';
import { ServiceService } from './service.service';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-ui';
  // @ViewChild(MatSort, { static: false }) set matSort(sort: MatSort)
  displayedColumns: string[] = ['id','face','price','size','date'];
  dataSource: MatTableDataSource<ProductType>;
  public product_data :Array<ProductType>;
  public page : number;
  public pageLimit : number;
  public isLoadingResults : boolean;
  public defaultSortCol :string;
  @ViewChild(MatSort,{ static: false }) sort: MatSort;
  
  // dataSource: any[];
  // displayedColumns: string[];
  constructor(public ServiceFile: ServiceService) {
    this.product_data = [];
    this.page = 1;
    this.pageLimit = 15;
    this.isLoadingResults = false;
    this.defaultSortCol = 'size';
    // this.dataSource = []
  }
  
   ngOnInit() {
    this.getProduce(this.page,this.pageLimit,this.defaultSortCol);
  }

  ngAfterViewInit(){
    this.sort.sortChange.subscribe((e) => {
      console.log('e',e)
      this.getProduce(this.page,this.pageLimit,e.active);
    });
    // this.displayedColumns = ['date','face','id','price','size'];
    // this.dataSource = new MatTableDataSource(this.product_data);
  }
  
  public getProduce(page,limit,sort): void {
    this.isLoadingResults = true;
      this.ServiceFile.getProduce(page,limit,sort).subscribe(v => {
        this.product_data = v;
        this.dataSource = new MatTableDataSource(this.product_data);
        this.dataSource.sort = this.sort;
        this.isLoadingResults = false;
        console.log('this.product_data',this.product_data);
      });
}

// public sortProduct ()

}
