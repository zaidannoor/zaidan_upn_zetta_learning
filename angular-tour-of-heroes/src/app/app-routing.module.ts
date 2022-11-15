import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path :'',
    loadChildren:()=>import('./app.module').then(m=> m.AppModule),
  },
  {
    path :'add',
    loadChildren:()=>import('./user/user.module').then(m=> m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
