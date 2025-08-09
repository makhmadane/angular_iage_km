import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { addProductComponent } from './product/addProduct.component';

const routes: Routes = [
  {path:'',component : ProductComponent},
  {path : "product", component : ProductComponent},
  {path : "addProduct", component : addProductComponent},
  {path : "updateProduct/:id", component : addProductComponent},
  {path : "user", component : UserComponent},
  {path:"**", redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
