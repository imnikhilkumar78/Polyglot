import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { usersDetails } from '../shared/services/usersDetails';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  userDetails: usersDetails[];
  constructor(public authService: AuthService) {}
  ngOnInit(): void {
    this.authService.getAllUsers().then((data) => {
      this.userDetails = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        } as usersDetails;
      });
    });
  }
}
