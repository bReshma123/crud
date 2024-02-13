import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent} from "./create/create.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path:'create', component:CreateComponent}
  // {path:'aboutus', component:AboutusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
