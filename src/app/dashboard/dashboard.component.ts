import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }
  Navigate(value){
    debugger;
    if(value == 'register'){
      this.router.navigate(['/register']);
    }
    else{
      this.router.navigate(['/getvehicle']);
    }
  }
}
