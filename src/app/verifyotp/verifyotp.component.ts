import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.scss']
})
export class VerifyotpComponent implements OnInit {
  token:string = '';
  errorMessage: string = '';
  constructor(private activateRouter: ActivatedRoute, private router: Router, private service:ApiService) { }
  ngOnInit(): void {
    this.activateRouter.queryParams.subscribe((params) => {
      console.log('.........token............', params['token']);
      this.token = params['token'];
    })
  }

  verifyOtp(formData: any) {
    console.log(formData);
    this.service.verifyOtp(this.token,formData.otp).subscribe({
      next:(data:any)=>{
        console.log('verifotp........',data);
        if(data.status){
          this.router.navigate(['resetpassword'],{queryParams:{token:data.token}});
        }
      },
      error:(error:any)=>{
        this.errorMessage = error?.error?.message;
      }
    })
  }
  clear() {
    this.errorMessage = '';
  }
  resetOtp(){
    this.service.resedOTP(this.token).subscribe({
      next:(data:any)=>{
        if(data.status){
          this.errorMessage = data.message;
        }
      },
      error:(error:any)=>{
        console.log(error);
        this.errorMessage = error.error.message
      }
    });
  }

}
