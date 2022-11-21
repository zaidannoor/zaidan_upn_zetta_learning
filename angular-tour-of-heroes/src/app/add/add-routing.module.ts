import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';

const routes: Routes = [

{
  path :'',
  pathMatch:'full',
  component: AddComponent

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
export class AddRoutingModule { }