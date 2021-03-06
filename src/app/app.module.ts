import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Components/User/login/login.component';
import { ProfileComponent } from './Components/User/profile/profile.component';
import { RegisterComponent } from './Components/User/register/register.component';
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

// import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
// import { WidgetTextComponent } from './components/widget/widget-edit/widget-text/widget-text.component';

import { Routing } from './app.routing';

import { UserService } from './services/user.service.client';
import { WebsiteService } from './services/website.service.client';
import { PageService } from './services/page.service.client';
import { WidgetService } from './services/widget.service.client';
import { FlickrService } from './services/flickr.service.client';
import { SharedService } from './services/shared.service.client';
import { AuthGuard } from './services/auth-guard.service';
// import { AdminGuard } from './services/adminGuard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteNewComponent,
    WebsiteListComponent,
    WebsiteEditComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    FlickrImageSearchComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  
  ],
  providers: [ 
  WebsiteService, 
  PageService, 
  UserService,
  WidgetService, 
  FlickrService, 
  SharedService, 
  AuthGuard 
  // AdminGuard
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
