import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { SignInData } from '../Models/sign-in-data';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { HelperService } from '../helper.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  user: SignInData = new SignInData('', '');

  constructor(private service: ApiService, private router: Router, private helper:HelperService) { }

  //create function named login
  login(form: NgForm) {
    if (form.invalid) {
      this.helper.errorToast('Please enter all fields');
      return;
    }
    console.log(form.value);
    this.service.login(form.value).subscribe({
      next: (data:any) => {
        console.log('data',data);
        localStorage.setItem('token',data.token);
        this.router.navigate(['/home']);
        //stroe token in local storage
      },
      error: (err) => {
        console.log('error',err.error);
        this.helper.errorToast(err.error.message);
      }
    });
  }
  clear() {
  }
}
