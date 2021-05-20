import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { AuthGuardService} from './core/guards/auth-guard.service';
import { AdminGuardService} from './core/guards/admin-guard.service';

const routes: Routes = [
  { 
    path: 'admin', 
    loadChildren:() => import('./admin/admin.module').then(m=>m.AdminModule), 
    canLoad: [AuthGuardService, AdminGuardService] 
  },
  { path:'orders',loadChildren:() => import('./orders/orders.module').then(m=>m.OrdersModule)},
  { path:'products',loadChildren:() => import('./products/products.module').then(m=>m.ProductsModule)},
  { path:'profile',loadChildren:() => import('./profile/profile.module').then(m=>m.ProfileModule)},
  { path:'cart',loadChildren:() => import('./cart/cart.module').then(m=>m.CartModule)},
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
