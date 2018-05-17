import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

//properties
userId: String;
user = {};
username: String;

  constructor(private userService: userService, private activateRoute: ActivatedRoute) { }

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
