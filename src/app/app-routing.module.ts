import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyComponent } from './verify/verify.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:SigninComponent},
  {path:'verify',component:VerifyComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
