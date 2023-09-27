import { Injectable } from '@angular/core';
import {HttpClientModule, HttpParams} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Login } from '../models/login.model';
import { Post } from '../models/post.model';
import { Res } from '../models/res.model';
import { Follow } from '../models/follow.model';
import { Bookmark } from '../models/bookmark.model';
import { RBookmark } from '../models/removebookmark.model';
import { ProfilePost } from '../models/profilepost.model';

@Injectable({
  providedIn: 'root'
})
export class TcloneService {
  baseApiUrl:  string = 'https://localhost:7145';
  constructor(private http : HttpClient) { }

  
  addUser(userReq : User):Observable<User>{
    return this.http.post<User>(this.baseApiUrl +'/api/Auth/register',userReq);
  }
  addLogin(addLoginRequest:Login):Observable<Login>{
    
   return this.http.post<Login>(this.baseApiUrl + '/api/auth/login', addLoginRequest);
  }
  addPost(postReq : Post):Observable<Post>{
    return this.http.post<Post>(this.baseApiUrl + '/api/feed',postReq);
  }
  getAll(id : string){
    return this.http.get(this.baseApiUrl + '/api/feed/feed/'+id);
  }
  getFollowingPost(id : string){
    return this.http.get(this.baseApiUrl + '/api/feed/followingPost/'+id);
  }
  getProfile(id : string){
    return this.http.get(this.baseApiUrl + '/api/feed/profile/'+id);
  }
  addFollow(followreq : Follow){
    return this.http.post(this.baseApiUrl + '/api/feed/follow',followreq);
  }
  getFollow(id :string){
    return this.http.get(this.baseApiUrl +'/api/feed/follower/'+id);
  }
  getFollowing(id :string){
    return this.http.get(this.baseApiUrl +'/api/feed/following/'+id);
  }
  getnoti(id:string){
    return this.http.get(this.baseApiUrl +'/api/notification/notification/'+id);
  }
  unfollow(id : number){
    return this.http.delete(this.baseApiUrl +'/api/feed/unfollow/'+id);
  }
  deleteAllNoti(id : string){
    return this.http.delete(this.baseApiUrl +'/api/notification/allnotification/'+id);
  }
  deleteNoti(id : number){
    return this.http.delete(this.baseApiUrl +'/api/notification/noti/'+id);
  }
  bookmark(bookreq : Bookmark){
    return this.http.post(this.baseApiUrl+ '/api/bookmark/bookmark',bookreq);
  }
  getbookmark(id : string){
    return this.http.get(this.baseApiUrl+ '/api/bookmark/getbookmark/'+id);
  }
  removeSBookmark(id : number){
    return this.http.delete(this.baseApiUrl+ '/api/bookmark/deletesbookmark/'+id);
  }
  getbookmarkid(id : string){
    return this.http.get(this.baseApiUrl+ '/api/bookmark/bookmarkedPost/'+id);
  }
  getProfilePost(profilepostreq : ProfilePost)
  {
    const params = new HttpParams()
      .set('poster', profilepostreq.poster)
      .set('viewer', profilepostreq.viewer);
    return this.http.get(this.baseApiUrl+ '/api/feed/profilepost',{ params });
  }
 
}
