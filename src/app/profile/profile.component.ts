import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  toggle:boolean;
  constructor(private router:Router,private routes:ActivatedRoute) { }

  ngOnInit() {
    this.toggle = this.routes.url['value'][0].path;
  }

  routing(location:string){
  this.router.navigate(['../',location],{relativeTo:this.routes});
  }
}
