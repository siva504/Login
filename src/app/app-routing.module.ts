import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path:'pipes', component:PipesComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'userLogin',component:UserLoginComponent}
  // {path:'',redirectTo:'/pipes',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
