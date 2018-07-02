import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  //properties
  username: string = "";
  password: string = "";
  errorFlag: boolean;
  // errorMsg = 'Invalid username or password!';
  // userService: UserService;
  // router: Router;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  login() {

    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.userService.findUserByCredentials(this.username, this.password).subscribe(
      (user: User) => {
        if(user){
          this.errorFlag = false;
          this.router.navigate(['user', user._id]);
        } else {
          this.errorFlag = true;
        }

      },
      (error: any) => {
        this.errorFlag = true;
      }
    )
  }

 

}






