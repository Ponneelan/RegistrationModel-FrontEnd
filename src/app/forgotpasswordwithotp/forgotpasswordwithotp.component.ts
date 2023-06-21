import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgotpasswordwithotp',
  templateUrl: './forgotpasswordwithotp.component.html',
  styleUrls: ['./forgotpasswordwithotp.component.scss']
})
export class ForgotpasswordwithotpComponent {
  errorMessage: string = '';
  constructor(private service: ApiService, private router: Router, private activateRouter: ActivatedRoute) { }

  clear() {
    this.errorMessage = '';
  }
  sentForgotPasswordLink(form: NgForm) {
    console.log('forgot password ',form.value);
    if (form.invalid) {
      this.errorMessage = 'Please enter email';
      return;
    }
    if (form.value.email === '') {
      this.errorMessage = 'Please enter email';
      return;
    }
    this.service.forgotPassword(form.value.email).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data.status) {
          const token = data.token;
          this.router.navigate(['verifyotp'], {queryParams:{token:token}});
        }
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = err.error.err;
      }
    })
  }
}
