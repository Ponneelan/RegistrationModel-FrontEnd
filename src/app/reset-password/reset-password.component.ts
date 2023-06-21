import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  token: string ;
  errorMessage: string = '';
  constructor(private activateRoute: ActivatedRoute,private router: Router,private service: ApiService) { 
    console.log('.............',this.activateRoute.snapshot.queryParamMap.get('token'));
    this.token = this.activateRoute.snapshot.queryParamMap.get('token')!;
  }
  clear() {
    this.errorMessage = '';
  }
  resetPassword(form: NgForm) {
    let payload = { password: form.value.newPassword,token:this.token }
    console.log(form.value);
    if (form.invalid) {
      this.errorMessage = 'Please enter password';
      return;
    }
    if (form.value.newPassword !== form.value.repeatPassword) {
      this.errorMessage = 'Password Miss Match';
      return;
    }
    this.service.resetPassword(payload).subscribe({
      next: (data: any) => {
        console.log(data);
        this.router.navigate(['login']);
      },
      error: (err:any) => {
        console.log(err);
        this.errorMessage = err.error.message;
      }
    })
  }
}
