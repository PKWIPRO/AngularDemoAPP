import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { PhoneComponent } from './phone/phone.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'orders',
    component: OrderListComponent,
  },
  {
    path: 'phones',
    component: PhoneComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
  
 }
