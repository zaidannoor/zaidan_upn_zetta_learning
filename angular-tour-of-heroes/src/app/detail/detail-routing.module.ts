import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [

{
  path :'',
  pathMatch:'full',
  component: DetailComponent

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
export class DetailRoutingModule { }