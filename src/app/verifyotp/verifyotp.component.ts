import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.scss']
})
export class VerifyotpComponent implements OnInit {
  token:string = '';
  constructor(private activateRouter: ActivatedRoute, private router: Router, private service:ApiService, private helperServive:HelperService) { }
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
        this.helperServive.errorToast(error?.error?.message)
      }
    })
  }
  clear() {
  }
  resetOtp(){
    this.service.resedOTP(this.token).subscribe({
      next:(data:any)=>{
        if(data.status){
        this.helperServive.successToast(data.message);
        }
      },
      error:(error:any)=>{
        console.log(error);
        this.helperServive.errorToast(error.error.message);
      }
    });
  }

}
