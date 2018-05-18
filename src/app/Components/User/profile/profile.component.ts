import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Injectable } from '@angular/core';
import { UserService } from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


properties
userId: string;
user = {};
username: string;
  constructor(private userService: UserService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

  	this.activateRoute.params
  	.subscribe(
  		(params: any) => {
  			this.userId = params['userId'];
  	} 	);

  	this.user = this.userService.findUserById(this.userId);
  	this.username = this.user['username'];
  }
}
