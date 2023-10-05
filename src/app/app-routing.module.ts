import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { EProfileComponent } from './components/e-profile/e-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditmypostComponent } from './components/editmypost/editmypost.component';
import { FeedComponent } from './components/feed/feed.component';
import { FollowlistComponent } from './components/followlist/followlist.component';
import { LoginComponent } from './components/login/login.component';
import { MylikesComponent } from './components/mylikes/mylikes.component';
import { MypostsComponent } from './components/myposts/myposts.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PostComponent } from './components/post/post.component';
import { ProfileviewComponent } from './components/profileview/profileview.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewlikesComponent } from './components/viewlikes/viewlikes.component';


const routes: Routes = [
  {
    path :'',
    component : LoginComponent
  },
  {
    path :'reg',
    component : RegisterComponent
  },
  {
    path : 'feed',
    component : FeedComponent
  },
  {
    path :'post',
    component : PostComponent
  },
  {
    path:'profile/:id',
    component : ProfileviewComponent
  },
  {
    path:'followlist/:id',
    component : FollowlistComponent
  },
  {
    path : 'noti',
    component : NotificationComponent
  },
  {
    path : 'bookmark/:id',
    component : BookmarksComponent
  },
  {
    path: 'editprofile/:id',
    component : EditProfileComponent
  },
  {
    path :'eprofile/:id',
    component : EProfileComponent
  },
  {
    path :'viewlikes/:id',
    component : ViewlikesComponent
  },
  {
    path : 'myposts/:id',
    component : MypostsComponent
  },
  {
    path :'editpost/:id',
    component : EditmypostComponent
  },
  {
    path : 'mylikes/:id',
    component : MylikesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
