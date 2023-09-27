import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TcloneService } from 'src/app/services/tclone.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  username: any;
  notis : any;
  constructor(private tclone:TcloneService,private router : Router){}
  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
   
    this.tclone.getnoti(this.username).subscribe(
      (res) => {
        this.notis=res;
        console.log(this.notis);
      }
    )
  }
  deleteAllNoti(){
    this.username;
    console.log(this.username);
    this.tclone.deleteAllNoti(this.username).subscribe(() => {
      window.location.reload();
    });

  }
  deleteNoti(id : number){
    console.log(id);
    this.tclone.deleteNoti(id).subscribe(() => {
      window.location.reload();
    });
  }

}
