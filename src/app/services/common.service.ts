import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService{
    
    constructor(private http: HttpClient) {

    }

    
    getProductList():Observable<any>{
        return this.http.get('../../assets/data/productlist.json');
    }
    
    /**
    
    getOrderList():Observable<any>{
        return this.http.get('../../assets/data/orderlist.json');
    }
    postData(data: any): Observable<any> {
        var headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post("URL"+ "Org/SaveOrgData", data,{headers:headers});
    }

    */ 

    getOrderList():Observable<any>{
        return this.http.get('https://order-service.apps.fnd-non-prod.canvas.nat.bt.com/api/v1/orders');
    }

    postData(data: any): Observable<any> {
        var headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post("https://order-service.apps.fnd-non-prod.canvas.nat.bt.com/api/v1/orders",data,{headers:headers});
    }
}
