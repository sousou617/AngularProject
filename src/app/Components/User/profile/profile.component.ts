import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Injectable } from '@angular/core';
import { UserService } from '../../../services/user.service.client';
import { NgForm } from '@angular/forms';
import { User } from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 @ViewChild('f') profileForm: NgForm;

//properties
uid: string;
userId: string;
user: User;
username: string;
email: string;
firstName: string;
lastName: string;
oldUsername: string;
usernameTaken: boolean;
submitSuccess: boolean;

  constructor(private userService: UserService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

  	this.activateRoute.params.subscribe(params => {
  			this.uid = params['uid'];
        this.user = this.userService.findUserById(this.uid);
        this.username = this.user.username;
        this.email = this.user.email;
        this.firstName = this.user.firstName;
        this.lastName = this.user.lastName;
        this.oldUsername = this.user.username;
  	});
}

    update() {
  	// this.user = this.userService.findUserById(this.userId);
  	this.username = this.profileForm.value.username;
    this.email = this.profileForm.value.email;
    this.firstName = this.profileForm.value.firstName;
    this.lastName = this.profileForm.value.lastName;

    // check if the new username was taken
    const aUser: User = this.userService.findUserByUsername(this.username);
    if (aUser && this.oldUsername !== this.username) {
      this.usernameTaken = true;
      this.submitSuccess = false;
    } else {
      const updatedUser: User = {
        _id: this.user._id,
        username: this.username,
        password: this.user.password,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      };
      this.userService.updateUser(this.uid, updatedUser);
      this.usernameTaken = false;
      this.submitSuccess = true;
      // console.log(this.userService.users);
    }

  }
 
}
