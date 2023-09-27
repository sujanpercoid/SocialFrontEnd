import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TcloneService } from 'src/app/services/tclone.service';

@Component({
  selector: 'app-followlist',
  templateUrl: './followlist.component.html',
  styleUrls: ['./followlist.component.scss']
})
export class FollowlistComponent implements OnInit {
  follows : any;
  follower :any;
  following :any;
  constructor(private tclone:TcloneService,private router : Router,private route :ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params)=> {
        this.follows = params.get('id');
        if(this.follows)
        {
          this.tclone.getFollow(this.follows).subscribe(
            (res) => {
              this.follower = res;
              console.log("follower",this.follower);

            }
          )
        }
        
  })
  this.route.paramMap.subscribe(
    (params)=> {
      this.follows = params.get('id');
      if(this.follows)
      {
        this.tclone.getFollowing(this.follows).subscribe(
          (res) => {
            this.following = res;
            console.log("following",this.following);

          }
        )
      }
      
})
  }

}
