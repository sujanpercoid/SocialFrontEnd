import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TcloneService } from 'src/app/services/tclone.service';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.scss']
})
export class MypostsComponent implements OnInit{
  myposts: any;
  user : any;
  constructor(private tclone:TcloneService,private router : Router,private route :ActivatedRoute){}
  ngOnInit(): void {
    this.user= sessionStorage.getItem('username');
    this.tclone.myposts(this.user).subscribe(
      (res)=> {
        this.myposts= res;
        console.log("my posts",this.myposts);
        
      }
    )
    
  }

}
