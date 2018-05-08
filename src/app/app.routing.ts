import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
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
// Import all other components here 

const APP_ROUTES : Routes = [
  { path : '' , component: LoginComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component:RegisterComponent },
  { path : 'user/:uid' , component: ProfileComponent},
  { path : 'user/:uid/website' , component: WebsiteListComponent},
  { path : 'user/:uid/website/new' , component: WebsiteNewComponent},
  { path : 'user/:uid/website/:wid' , component: WebsiteEditComponent},
  { path : 'user/:uid/website/:wid/page', component : PageListComponent},
  { path : 'user/:uid/website/:wid/page/new', component : PageNewComponent},
  { path : 'user/:uid/website/:wid/page/:pid', component : PageEditComponent},
  { path : 'user/:uid/website/:wid/page/:pid/widget', component : WidgetListComponent},
  { path : 'user/:uid/website/:wid/page/:pid/widget/new', component : WidgetChooserComponent},
  { path : 'user/:uid/website/:wid/page/:pid/widget/:wgid', component : WidgetEditComponent},
  // so on
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
