import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PostEdit } from 'src/app/models/post.model';
import { TcloneService } from 'src/app/services/tclone.service';

@Component({
  selector: 'app-editmypost',
  templateUrl: './editmypost.component.html',
  styleUrls: ['./editmypost.component.scss']
})
export class EditmypostComponent implements OnInit {
  postedit : PostEdit={
    post : '',
    username : '',
    view : '',
    postId: 0
  }
  username : any;
  postid: any;
  constructor(private tclone:TcloneService,private router : Router,private route :ActivatedRoute){}
  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
    this.route.paramMap.subscribe(
      (params)=> {
        this.postid = params.get('id');
        if(this.postid)
        {
          this.tclone.getPostForEdit(this.postid).subscribe(
            (res) => {
              this.postedit = res;
              console.log("postforedit",this.postedit);

            }
          )
        }
        
  })
    
  }
  deleteProfile(id : number){
    this.tclone.deletPost(id).subscribe(
      (res) =>
      {
        this.router.navigate(['/myposts', this.username]);
      }
    )
  }
  updatePost(){
    this.tclone.updatePost(this.postedit.postId,this.postedit).subscribe(
      (res) =>
      {
        {
          this.router.navigate(['/myposts', this.username]);
        }
      }
    )
  }

}
