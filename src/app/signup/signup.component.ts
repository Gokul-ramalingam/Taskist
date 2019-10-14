import { Component, OnInit } from '@angular/core';
import { User } from '../User'
import { UserService } from '../user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }
}
