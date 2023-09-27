import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; // Correct import statement
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { TcloneService } from 'src/app/services/tclone.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post!: FormGroup;
  name : any;

  constructor(private tcloneservice: TcloneService, private fb: FormBuilder, private router: Router) {} // Use FormBuilder instead of FormGroup

  ngOnInit(): void {
    this.name = sessionStorage.getItem('username');
    
    this.post = this.fb.group({
      post: new FormControl('', [Validators.required, Validators.minLength(1)]),
      view: new FormControl('', [Validators.required]),
    });
  }

  addPost() {
    const postData : Post =Object.assign(this.post.value);
    postData.username=this.name;
    this.tcloneservice.addPost(postData).subscribe(
      (res) => {
        alert("Sucesfully Posted !!");
        this.router.navigate(['/feed']);
      }
    
    )

  }
}

