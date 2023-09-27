import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookmark } from 'src/app/models/bookmark.model';
import { TcloneService } from 'src/app/services/tclone.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  username : any;
  bookmarks : any;
  bookmarkColor:boolean=false;
  bookData : Bookmark ={
    username :'',
    postid : 0
  }
  constructor(private tclone:TcloneService,private router : Router,private route :ActivatedRoute){}
  ngOnInit(): void {
    this.username = sessionStorage.getItem('username'); 
    this.tclone.getbookmark(this.username).subscribe(
      (res) => {
        this.bookmarks = res;
        console.log("bookmark data",this.bookmarks);

      }

    )
  }
  deleteAllBook(){}
  deleteBook(id : number){}
  
  removebookmarkPost(id: number){
    console.log(id);
    this.tclone.removeSBookmark(id).subscribe(
      (res)=>{
        window.location.reload();
      }
    );
    
  }
  
}
