import { Component } from '@angular/core';
import { SignUpData } from '../Models/sign-up-data';
import { NgForm } from "@angular/forms";
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { HelperService } from '../helper.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user:SignUpData = new SignUpData('','','','',false);
  constructor(private service:ApiService,private router:Router, private helperService:HelperService) { }
  clear(){
  }
  signUp(form:NgForm){
    if(form.invalid){
      this.helperService.errorToast('Please enter all fields');
      return;
    }
    if(form.value.password != form.value.confirmPassword){
      this.helperService.errorToast('password and confirm password are not same');
      return;
    }
    //call api service
    let payload = {
      name:form.value.name,
      email:form.value.email,
      password:form.value.password,
    }
    this.service.signUp(payload).subscribe({
      next:(data:any)=>{
        console.log(data);
        this.helperService.successToast(data.message);
        form.reset();
      },
      error:(err:any)=>{
        console.log(err.error);
        this.helperService.errorToast(err.error.message);
      }
    });
  }
}
