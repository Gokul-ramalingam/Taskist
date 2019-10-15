import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
   toggle:boolean = true;
  constructor(private router:Router,private routes:ActivatedRoute) { }

  ngOnInit() {
    this.toggle = this.routes.url['value'][0].path === 'main' ? true:false;
  }

}
