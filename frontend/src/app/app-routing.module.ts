import { NgModule }   from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes }  from '@angular/router';

const routes: Routes = [
    { path: 'home', component: ProductComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}