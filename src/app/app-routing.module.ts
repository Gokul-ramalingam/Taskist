import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router'
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes:Routes = [
{path:'',redirectTo:'/main',pathMatch:'full'},
{path:'main',component:MainComponent},
{path:'main/login',component:LoginComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
