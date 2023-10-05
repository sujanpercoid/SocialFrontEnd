import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FeedComponent } from './components/feed/feed.component';
import { CommonComponent } from './components/common/common.component';
import { PostComponent } from './components/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileviewComponent } from './components/profileview/profileview.component';
import { FollowlistComponent } from './components/followlist/followlist.component';
import { NotificationComponent } from './components/notification/notification.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { MatIconModule } from '@angular/material/icon';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EProfileComponent } from './components/e-profile/e-profile.component';
import { ViewlikesComponent } from './components/viewlikes/viewlikes.component';
import { MypostsComponent } from './components/myposts/myposts.component';
import { EditmypostComponent } from './components/editmypost/editmypost.component';
import { MylikesComponent } from './components/mylikes/mylikes.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FeedComponent,
    CommonComponent,
    PostComponent,
    ProfileviewComponent,
    FollowlistComponent,
    NotificationComponent,
    BookmarksComponent,
    EditProfileComponent,
    EProfileComponent,
    ViewlikesComponent,
    MypostsComponent,
    EditmypostComponent,
    MylikesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatIconModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
