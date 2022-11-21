import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path :'',
    loadChildren:()=>import('./cashier/cashier.module').then(m=> m.CashierModule),
  },
  {
    path :'detail/:id',
    loadChildren:()=>import('./detail/detail.module').then(m=> m.DetailModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
