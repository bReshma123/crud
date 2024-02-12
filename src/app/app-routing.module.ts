import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent} from "./create/create.component";

const routes: Routes = [
  {path:'create', component:CreateComponent}
  // {path:'aboutus', component:AboutusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
