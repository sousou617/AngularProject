import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service.client';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  username: string;
  password: string;
  errorFlag: boolean;
  // errorMsg = 'Invalid username or password!';
  // userService: UserService;
  // router: Router;

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() { }

  login() {

    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.userService.login(this.username, this.password).subscribe(
      (user: User) => {
        if(!user) {
          this.errorFlag = true;
        } else {
          this.errorFlag = false;
          this.sharedService.user = user;
          this.router.navigate(['user']);
        }

      },
      (error: any) => {
        this.errorFlag = true;
      }
    )
  }

 

}






