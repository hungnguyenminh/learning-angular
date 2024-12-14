import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Trang Home
  { path: 'detail/:id', component: DetailComponent }, // Trang Detail
  { path: 'cart', component: CartComponent }, // Trang Cart
  { path: 'about-us', component: AboutUsComponent }, // Trang About Us
];
