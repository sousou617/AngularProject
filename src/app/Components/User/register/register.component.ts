import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client'
import { Router } from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	@ViewChild('f') registerForm: NgForm
	username: string;
	password: string;
	verifyPassword: string;
	passwordError: boolean;
	usernameError: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  register() {
  	this.username = this.registerForm.value.username;
  	this.password = this.registerForm.value.password;
  	this.verifyPassword = this.registerForm.value.verifyPassword;
  
  	if(this.password !== this.verifyPassword) {
  	   this.passwordError = true;
       this.usernameError = false;
    } else {
  		this.passwordError = false;
  	  const user: User = this.userService.findUserByUsername(this.username);
  	  if(user) {
        this.usernameError = true;
      } else {
        const newUser: User {
          _id: " ",
          username: this.username,
          password: this.password,
          firstName: "",
          lastName: "",
          email: "";
        }

      }
    }
  }
}
