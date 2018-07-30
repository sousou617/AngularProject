import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './services/auth-guard.service';



import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from './Components/user/login/login.component';
import { ProfileComponent } from './Components/user/profile/profile.component';
import { RegisterComponent } from './Components/user/register/register.component';
import { AppComponent } from './app.component';
import { WebsiteNewComponent } from './Components/Website/website-new/website-new.component';
import { WebsiteListComponent } from './Components/Website/website-list/website-list.component';
import { WebsiteEditComponent } from './Components/Website/website-edit/website-edit.component';
import { PageNewComponent } from './Components/Page/page-new/page-new.component';
import { PageEditComponent } from './Components/Page/page-edit/page-edit.component';
import { PageListComponent } from './Components/Page/page-list/page-list.component';
import { WidgetChooserComponent } from './Components/Widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './Components/Widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './Components/Widget/widget-list/widget-list.component';
import { WidgetHeaderComponent } from './Components/Widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './Components/Widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './Components/Widget/widget-edit/widget-youtube/widget-youtube.component';
import { FlickrImageSearchComponent } from './Components/Widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import { AdminGuard } from './services/adminGuard.service';


// // Import all other components here 

const APP_ROUTES : Routes = [
  { path : '' , component: LoginComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component:RegisterComponent},
  { path : 'user', component: ProfileComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website' , component: WebsiteListComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/new' , component: WebsiteNewComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid' , component: WebsiteEditComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid/page', component : PageListComponent, canActivate: [AuthGuard, AdminGuard]},
  { path : 'user/:uid/website/:wid/page/new', component : PageNewComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid/page/:pid', component : PageEditComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid/page/:pid/widget', component : WidgetListComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid/page/:pid/widget/new', component : WidgetChooserComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid/page/:pid/widget/:wgid', component : WidgetEditComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid/page/:pid/widget/:wgid/flickr', component : FlickrImageSearchComponent, canActivate: [AuthGuard]},
//   // so on
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
