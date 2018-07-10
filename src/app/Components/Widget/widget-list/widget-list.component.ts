import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../services/widget.service.client'
import { Widget } from '../../../models/widget.model.client';
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

uid: string;
wid: string;
pid: string;
widgets: Widget[];

  constructor(private sanitizer: DomSanitizer, private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params => {
  		this.uid = params['uid'];
  		this.wid = params['wid'];
  		this.pid = params['pid'];
  		this.widgetService.findWidgetsByPageId(this.pid).subscribe(
        (widgets: Widget[]) => {
          this.widgets = widgets;
        }
        );
      // console.log(this.widgets);
  	});
  }

getYoutubeUrl(url) {
	let embedUrl = "https://www.youtube.com/embed/";
	const parsedUrl = url.split('/');
	embedUrl += parsedUrl[parsedUrl.length -1];
	return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
}

}
