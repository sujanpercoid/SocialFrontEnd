import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { FeedComponent } from './components/feed/feed.component';
import { FollowlistComponent } from './components/followlist/followlist.component';
import { LoginComponent } from './components/login/login.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PostComponent } from './components/post/post.component';
import { ProfileviewComponent } from './components/profileview/profileview.component';
import { RegisterComponent } from './components/register/register.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
