import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInData } from './Models/sign-in-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  //verify api 
  verify(token:string){
    return this.http.post('http://localhost:3000/users/verify',{token:token});
  }
  //login api
  login(data:SignInData){
    return this.http.post('http://localhost:3000/users/login',data);
  }

  //signup api
  signUp(data:any){
    console.log('sign up data',data);
    return this.http.post('http://localhost:3000/users/signup',data);
  }

  //forgot password api
  forgotPassword(email:string){
    return this.http.post('http://localhost:3000/users/forgotpassword',{email:email});
  }

  //reset password api
  resetPassword(data:any){
    console.log( data);
    return this.http.put('http://localhost:3000/users/resetpassword',data);
  }

  verifyOtp(token:string,otp:string){
    console.log(otp,'\n','token............................',token);
    return this.http.post('http://localhost:3000/users/verifyotp',{token:token,otp:otp});
  }
  resedOTP(token:string){
    console.log('resent otp ............',token)
    return this.http.post('http://localhost:3000/users/resendotp',{token:token});
  }
}
