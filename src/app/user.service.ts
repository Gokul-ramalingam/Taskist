import { Injectable } from '@angular/core';
import { User,SignIn } from './User'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../environments/environment';

@Injectable()
export class UserService {

  constructor(private http : HttpClient) { }

  selectedUser:User = {
    username:'',
    email:'',
    password:''
  }

  userSignIn:SignIn = {
    email:'',
    password:''
  }

  postUser(user:User){
    return this.http.post(environment.apiBaseUrl+'/register',user);
  }

  signInUser(user:SignIn){
    return this.http.post(environment.apiBaseUrl+'/login',user);
  }

}
