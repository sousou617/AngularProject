import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { WidgetService } from '../../../../services/widget.service.client';
import { Widget } from '../../../../models/widget.model.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

@ViewChild('f') widgetForm: NgForm;

wid: string;
pid: string;
uid: string;
wgid: string;
widget: Widget= {
	widgetType: '',
	pageId: '',
};	
name: string;
text: string;
size: number;



  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }


  ngOnInit() {
  	this.activatedRoute.params.subscribe(params => {
  		// console.log("hello")
  		this.uid = params['uid'];
  		this.wid = params['wid'];
  		this.pid = params['pid'];
  		this.wgid = params['wgid'];
  		this.widgetService.findWidgetById(this.wgid).subscribe(
  			(widget: Widget) => {
  				this.widget = widget;
  		})
  	});
  }

update(){
	this.name = this.widgetForm.value.name;
	this.text = this.widgetForm.value.text;
	this.size = this.widgetForm.value.size;

	const updatedWidget: Widget = {
		_id: this.wgid,
		name: this.name,
		widgetType: this.widget.widgetType,
		pageId: this.pid, 
		size: this.size,
		text: this.text
	}

  	this.widgetService.updateWidget(this.wgid, updatedWidget).subscribe(
        (widget: Widget) => {
          this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
        }
      );
  	
  }

remove(){
  	this.widgetService.deleteWidget(this.wgid).subscribe(
      (widgets: Widget[]) => {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
      }
    );
  }
}
