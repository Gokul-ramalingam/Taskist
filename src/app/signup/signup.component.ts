import { Component, OnInit } from '@angular/core';
import { User } from '../User'
import { UserService } from '../user.service'
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router'
import { MainComponent } from '../main/main.component'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private userService:UserService, private router:Router,private routes:ActivatedRoute) { }

  ngOnInit() {
  }

showSucessMessage: boolean;
serverErrorMessages: string;
 loading:boolean=false;
onSubmit(form: NgForm) {
  this.loading = true;
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.loading = false;
        this.resetForm(form);
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
    this.userService.selectedUser = {
      username: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }


  login(){
  this.router.navigate(['../','signin'],{relativeTo:this.routes});
  }
}

