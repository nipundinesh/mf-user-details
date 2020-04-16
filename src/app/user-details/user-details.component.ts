import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  usersList: any[];
  user;

  // firstName: string;
  // lastName: string;
  // phoneNumber: string;
  // empid: string;
  // gitUrl: string;
  // comment: string;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe((users) => {

      console.log(users);

      this.usersList = users;
      this.user = users[0];
    });

  }



}