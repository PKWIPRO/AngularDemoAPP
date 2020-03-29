import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  showCart:boolean=false;
  cartList:any=[];
  products:any= [];

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.commonService.getProductList().subscribe(response => {
      console.log(response);
      this.products = response;
    }, error => {
      console.log(error);
    });
  }

   onAddClick(data){
      this.cartList.push(data);
   }

   onShowCart(){
      this.showCart = true;
   }

   onRemoveProduct(data){

      let index = -1;

      this.cartList.forEach(function (value, ind) {
           if(value.productNumber === data.productNumber) {
            index =  ind;
            return false;
           }
       });
      this.cartList.splice(index, 1);
   }

   createOrder(){
      
      let payload = {
        "products":this.cartList
      }

      this.commonService.postData(payload).subscribe(response => {
        console.log(response);
        this.showCart = false;
        this.cartList=[];
      }, error => {
        this.showCart = false;
        console.log(error);
      });
    }
}
