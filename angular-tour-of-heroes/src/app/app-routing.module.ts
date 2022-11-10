import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path :'cashier',
    loadChildren:()=>import('./cashier/cashier.module').then(m=> m.CashierModule),
  },
  {
    path :'detail',
    loadChildren:()=>import('./detail/detail.module').then(m=> m.DetailModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
