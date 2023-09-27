import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
})
export class CommonComponent implements OnInit {
   user_session: any;
   contactid: any;

  constructor(private router: Router) {}

   ngOnInit(): void {
    this.user_session = sessionStorage.getItem('username');
    this.contactid=sessionStorage.getItem('contactid');
  }

  sessionOut(): void {
    sessionStorage.clear();
    alert('logout');
  }

  // getUser(): void {
  //   this.router.navigate(['profile', { id: sessionStorage.getItem('id') }]);
  // }
  getUser(): void {
    this.router.navigate(['profile']);
  }
}