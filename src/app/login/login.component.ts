import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private userService:UserService,private router:Router,private routes:ActivatedRoute) { }

  ngOnInit() {
  }
  showSucessMessage: boolean;
  serverErrorMessages: string;
  loading:boolean = false;
onSubmit(form: NgForm) {
  this.loading = true;
    this.userService.signInUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.loading = false;
        this.resetForm(form);
        localStorage.setItem('token',res['token']);
        this.profile();
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
          this.loading = false;
      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.userSignIn = {
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }


  signup(){
  this.router.navigate(['../','main'],{relativeTo:this.routes});
  }

  profile(){
  this.router.navigate(['../','profile'],{relativeTo:this.routes});
  }

}
