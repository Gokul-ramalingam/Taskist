import { Component, OnInit } from '@angular/core';
import { User } from '../User'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 userModel = new User('Gokul','Gokulramalingam1@gmail.com','9999999999')
}
