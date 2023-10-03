import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/models/profile.model';
import { TcloneService } from 'src/app/services/tclone.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  constructor(private tclone:TcloneService,private router : Router,private route :ActivatedRoute){}
  user : any;
  profileData : Profile ={
    contactId : 0,
    id : 0,
    name : '',
    email : '',
    username  : '',
    phone : 0,
  };
  
  ngOnInit(): void {
    this.user= sessionStorage.getItem('username');
    console.log(this.user);
    this.tclone.getPEdit(this.user).subscribe(
      (res) =>{
        this.profileData = res;
        console.log(this.profileData);

      }
    )
  }

}
