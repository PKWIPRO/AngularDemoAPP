import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders:any =[]

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.getOrderList();
  }

  getOrderList() {
    this.commonService.getOrderList().subscribe(response => {
      console.log(response);
      this.orders=response;
    }, error => {
      console.log(error);
    });
  }

}
