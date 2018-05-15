import { Component, OnInit } from '@angular/core';

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

  	this.user = userService.findUserById(this.userId);
  	this.username = this.user['username'];
  }
}
