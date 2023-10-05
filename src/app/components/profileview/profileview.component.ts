import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Follow } from 'src/app/models/follow.model';
import { ProfilePost } from 'src/app/models/profilepost.model';
import { RBookmark } from 'src/app/models/removebookmark.model';
import { Unfollow } from 'src/app/models/unfollow.model';
import { TcloneService } from 'src/app/services/tclone.service';

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.scss']
})
export class ProfileviewComponent implements OnInit {
  followData : Follow ={
    username :'',
    follows:''
  }
  unfollowData : Unfollow ={
    followid : 0,
  }
  profilePostData : ProfilePost = {
    poster : '',
    viewer : ''
  }
  likeData : RBookmark={
    postId :0,
    username : ''
  }
  lPosts: any;
  follows : any;
  username: any;
  profilereturn :any;
  followers: any;
  feed : any;
  followid :any;
  poster : any;
  pPosts:any;
  likeinfo : any;

  
  constructor(private tclone:TcloneService,private router : Router,private route :ActivatedRoute){}
  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
    
    this.route.paramMap.subscribe(
      (params)=> {
        this.follows = params.get('id');
        
        if (this.follows)
        {
          this.tclone.getProfile(this.follows).subscribe(
            (res) => {
              this.profilereturn=res;
              console.log("Profileinfo",this.profilereturn);

            }
          )
        }

      }
    )
    this.tclone.getlikes(this.username).subscribe(
      (res) => {
        this.likeinfo= res;
        console.log("likeinfo",this.likeinfo);

      }
    )

    this.route.paramMap.subscribe(
      (params)=> {
        this.follows = params.get('id');
        if(this.follows)
        {
          this.tclone.getFollow(this.follows).subscribe(
            (res) => {
              this.followers = res;
              console.log("follower",this.followers);

            }
          )
        }
        
  })
  //get post for profile
  this.route.paramMap.subscribe(
    (params)=> {
      this.poster = params.get('id');
      if(this.follows)
      {
        this.profilePostData.viewer=this.username;
        this.profilePostData.poster=this.poster;
        this.tclone.getProfilePost(this.profilePostData).subscribe(
          (res) => {
            this.pPosts = res;
            console.log("Post For Profile",this.pPosts);

          }
        )
      }
      })

    //get post for profile likes
    this.route.paramMap.subscribe(
      (params)=> {
        this.poster = params.get('id');
        if(this.follows)
        {
          this.profilePostData.viewer=this.username;
          this.profilePostData.poster=this.poster;
          this.tclone.getProfileLikePost(this.profilePostData).subscribe(
            (likepostdata) => {
              this.lPosts = likepostdata;
              console.log("Post For Like",this.lPosts);
  
            }
          )
        }
      })

  }
  followerIsFollowing(): boolean {
      let isFollowing = false;
      this.followers.forEach((follower: { username: string }) => {
        if (follower.username === this.username) {
          isFollowing = true;
        }
      });
      return isFollowing;
    }
  sameUser(): boolean {
    let samUser=false;
    this.profilereturn.forEach((samUse : {username : string}) => {
      if(samUse.username == this.username){
        samUser = true;
      }
    });
    return samUser;
  }
  forLikes(postId: number): boolean {
    return this.likeinfo.some((likeinfo: { postId: number }) => likeinfo.postId === postId);
  }

  likePost(id : number){
    this.likeData.username=this.username;
    this.likeData.postId=id;
    console.log(this.likeData);
    this.tclone.sendlikeData(this.likeData).subscribe(
      (res) => {
        console.log(res);
        
        window.location.reload();
      }
    )
    }  
    likedPost(id : number)
    {
      this.likeData.username=this.username;
    this.likeData.postId=id;
    console.log(this.likeData);
    this.tclone.removelikeData(this.likeData).subscribe(
      (res) => {
        console.log(res);
        
        window.location.reload();
      }
    )
    }
  
    
 
  

  follow() {
    this.followData.username=this.username;
    this.followData.follows=this.follows;
    console.log(this.followData);
    
    this.tclone.addFollow(this.followData).subscribe(() => {
      window.location.reload();
    });
    
    // window.location.reload();

  }
  unfollow() {
    this.followers.forEach((follower: { username: string, followId: number }) => {
      if (follower.username === this.username) {
        this.followid = follower.followId;
        this.tclone.unfollow(this.followid).subscribe(() => {
          window.location.reload();
        })
      }
    });
  }
  
  

    
}



