import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TcloneService } from 'src/app/services/tclone.service';

@Component({
  selector: 'app-viewlikes',
  templateUrl: './viewlikes.component.html',
  styleUrls: ['./viewlikes.component.scss']
})
export class ViewlikesComponent implements OnInit {
  likeinfos : any;
  id:any;
  constructor(private tclone:TcloneService,private router : Router,private route :ActivatedRoute){}
ngOnInit(): void {
  this.route.paramMap.subscribe(
    (params)=> {
      this.id = params.get('id');
      if(this.id)
      {
        this.tclone.getlikeuser(this.id).subscribe(
          (res) => {
            this.likeinfos = res;
            console.log("likes",this.likeinfos);

          }
        )
  
      }
    });


  }
}
