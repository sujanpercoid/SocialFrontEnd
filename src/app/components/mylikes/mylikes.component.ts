import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sequenceEqual } from 'rxjs';
import { RBookmark } from 'src/app/models/removebookmark.model';
import { TcloneService } from 'src/app/services/tclone.service';

@Component({
  selector: 'app-mylikes',
  templateUrl: './mylikes.component.html',
  styleUrls: ['./mylikes.component.scss']
})
export class MylikesComponent implements OnInit{
  likedPosts: any;
  user:any;
  likeData : RBookmark={
    postId :0,
    username : ''
  }
  constructor(private tclone:TcloneService,private router : Router,private route :ActivatedRoute){}
  ngOnInit(): void {
    this.user= sessionStorage.getItem('username');
    this.tclone.mylikes(this.user).subscribe(
      (res)=> {
        this.likedPosts= res;
        console.log("likedposts",this.likedPosts);
        
      }
    )

  }
  removelike( id : number){
     this.likeData.username=this.user;
      this.likeData.postId=id;
      console.log(this.likeData);
      this.tclone.removelikeData(this.likeData).subscribe(
      (res) => {
        console.log(res);
        
        window.location.reload();
      }
    )
}
}
