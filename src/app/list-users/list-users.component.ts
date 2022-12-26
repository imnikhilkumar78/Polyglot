import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/services/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  userDetails: User[];
  constructor(public authService: AuthService) {}
  ngOnInit(): void {
    this.authService.getUserList().subscribe((data) => {
      this.userDetails = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as User), //genereic type spread is not supported
        } as User; //User is my interface name
      });
    });
  }
  deleteUser(uid: string) {
    this.authService.deleteUser(uid);
  }
}
