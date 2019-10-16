import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router'
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes:Routes = [
{path:'',redirectTo:'/main',pathMatch:'full'},
{path:'main',component:MainComponent},
{path:'signin',component:MainComponent},
{path:'todo',component:ProfileComponent},
{path:'events',component:ProfileComponent},
{path:'notes',component:ProfileComponent},
{path:'news',component:ProfileComponent}
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
