import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/models/profile.model';
import { TcloneService } from 'src/app/services/tclone.service';

@Component({
  selector: 'app-e-profile',
  templateUrl: './e-profile.component.html',
  styleUrls: ['./e-profile.component.scss']
})
export class EProfileComponent implements OnInit{
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
    
    this.tclone.getPEdit(this.user).subscribe(
      (res) =>{
        this.profileData = res;
        console.log(this.profileData);

      }
    )
  
}
updateProfile(){
  this.tclone.updateProfile(this.profileData.id,this.profileData)
  .subscribe({
    next: (response)=>
    {
      this.router.navigate(['/editprofile', this.user]);
    }
  })

}
deleteProfile(id: string){
    
  this.tclone.deleteProfile(id)
  .subscribe({

    
    next: (response)=>
    {
      sessionStorage.clear();
      this.router.navigate(['']);
    },
    
  })
  
  }

}
