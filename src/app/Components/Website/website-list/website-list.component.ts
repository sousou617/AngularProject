import { Component, OnInit } from '@angular/core';
import {WebsiteService} from "../../../services/website.service.client";
import {ActivatedRoute} from "@angular/router";
import { Injectable } from '@angular/core';
import { Website } from '../../../models/website.model.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

userId: string;
websites: Website[];

  constructor(private _websiteService : WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  	// this.activatedRoute.params
  	// .subscribe(
  	// 	(params: any) => {
  	// 		this.userId = params['userId'];
  	// 	});
  	// this.websites = this._websiteService.findWebsiteByUser(this.userId);

  }

}
