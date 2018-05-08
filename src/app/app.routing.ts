import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./components/user/login/login.component";
import {RegisterComponent} from "./components/user/register/register.component";
import { AppComponent } from './app.component';
import { ProfileComponent } from './Components/user/profile/profile.component';
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
  { path : 'App', component : AppComponent},
  { path : 'test', component: TestComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component:RegisterComponent },
  { path : 'user/:userId' , component: ProfileComponent},
  { path : 'user/:userId/website' , component: WebsiteListComponent}

  // so on
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
