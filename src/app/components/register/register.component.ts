import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { TcloneService } from 'src/app/services/tclone.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signup! :FormGroup;
  constructor(private tcloneService: TcloneService, private router: Router,private fb:FormBuilder) {}
  ngOnInit(): void{
    this.signup=this.fb.group({
      name: new FormControl ('',Validators.required),
      username: new FormControl('',[Validators.required,Validators.minLength(3)]),
      phone: new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      email:new FormControl ('',Validators.required)
    })
  }
  addUser(){
    const userData : User =Object.assign(this.signup.value);
    this.tcloneService.addUser(userData).subscribe(
      (response) => {
        console.log(response);
        alert("User Created Successfully");
        this.router.navigate(['']);
      }
     
    )
     //reset form
     this.signup.reset();
  }
}
