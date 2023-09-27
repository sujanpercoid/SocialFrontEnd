import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Res } from 'src/app/models/res.model';
import { TcloneService } from 'src/app/services/tclone.service';
import {MatTabsModule} from '@angular/material/tabs';
import { Bookmark } from 'src/app/models/bookmark.model';
import { RBookmark } from 'src/app/models/removebookmark.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  
  
})
export class FeedComponent implements OnInit {
  isBookmarked: boolean = false;
  user : any;
  feeds:any;
  followingPost: any;
  bookmarkColor:boolean=false;
  bookData : Bookmark ={
    username :'',
    postid : 0
  }
  rbookData : RBookmark ={
    postId : 0,
    username : ''
  }
  bookmarks: any;
  bookmarkid : any;

  
  constructor(private tclone:TcloneService,private router : Router){}
  ngOnInit(): void {
    this.user = sessionStorage.getItem('username');
    this.tclone.getAll(this.user).subscribe(
      (res) => {
        this.feeds= res;
        console.log("all",this.feeds);
        
      }
      
    ) 
    this.tclone.getbookmark(this.user).subscribe(
      (res) => {
        this.bookmarks = res;
        console.log("bookmark data",this.bookmarks);

      }

    )
    
    this.tclone.getFollowingPost(this.user).subscribe(
      (res) => {
        this.followingPost= res;
        console.log("following",this.followingPost);
        
      }
      
    )
   
    

  }
  
  samePost(postId: number): boolean {
    // Check if there is a matching postId in the bookdata array
    return this.bookmarks.some((bookmark: { postId: number }) => bookmark.postId === postId);
  }
  
  

  bookmarkPost(id : number) {
    // this.isBookmarked = !this.isBookmarked;
    this.bookData.username= this.user;
    this.bookData.postid=id;
    console.log(this.bookData);
    this.tclone.bookmark(this.bookData).subscribe(() => {
      window.location.reload();
    });
  }
  removebookmarkPost(id: number){
    
    this.rbookData.username = this.user;
    this.rbookData.postId= id;
    console.log(this.rbookData);
    // this.tclone.rboookFeed(this.rbookData).subscribe(
    //   (res)=>{
    //     window.location.reload();
    //   }
    // );
    
  }

}
