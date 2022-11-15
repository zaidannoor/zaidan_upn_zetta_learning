import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

{
  path :'',
  pathMatch:'full',
  component: HomeComponent

},
{
  path:'**',
  pathMatch:'full',
  redirectTo:''
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }