import { Injectable } from '@angular/core';
import { User } from './User'

@Injectable()
export class UserService {

  constructor() { }

  selectedUser:User = {
    username:' ',
    email:' ',
    password:' '
  }

}
