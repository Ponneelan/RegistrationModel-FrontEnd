import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { VerifyComponent } from './verify/verify.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { SignInData } from './Models/sign-in-data';
import { SignUpData } from './Models/sign-up-data';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import { ForgotpasswordwithotpComponent } from './forgotpasswordwithotp/forgotpasswordwithotp.component';
import { ToastModule } from "primeng/toast";
import { BrowserAnimationsModule, } from "@angular/platform-browser/animations";
import { HelperService } from './helper.service';
import { MessageService } from 'primeng/api';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, POSITION, SPINNER } from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#513125',
  fgsPosition: POSITION.centerCenter,
  fgsSize: 50,
  blur: 0,
  fgsType: SPINNER.ballSpinClockwise,
  hasProgressBar: false,
  overlayColor: "rgba(40,40,40,0.12)",
};
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    VerifyComponent,
    HomeComponent,
    ResetPasswordComponent,
    VerifyotpComponent,
    ForgotpasswordwithotpComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),

  ],
  providers: [ApiService, HelperService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
