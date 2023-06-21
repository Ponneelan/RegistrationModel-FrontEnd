import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyComponent } from './verify/verify.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotpasswordwithotpComponent } from './forgotpasswordwithotp/forgotpasswordwithotp.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'login',component:SigninComponent},
  {path:'verify',component:VerifyComponent},
  {path:'home',component:HomeComponent},
  {path:'forgotpassword',component:ForgotpasswordwithotpComponent},
  {path:'resetpassword',component:ResetPasswordComponent},
  {path:'verifyotp',component:VerifyotpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }