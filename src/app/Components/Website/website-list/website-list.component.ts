import { Component, OnInit } from '@angular/core';
import { WebsiteService } from "../../../services/website.service.client";
import { ActivatedRoute } from "@angular/router";
import { Injectable } from '@angular/core';
import { Website } from '../../../models/website.model.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

userId: string;
uid: string;
websites: Website[];

  constructor(private websiteService : WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.websites = this.websiteService.findWebsiteByUser(this.uid);
    })
  }

}
