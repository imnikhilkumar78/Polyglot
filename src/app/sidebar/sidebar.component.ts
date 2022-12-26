import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { usersDetails } from '../shared/services/usersDetails';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  listDetails: usersDetails[];
  constructor(public authService: AuthService) {}
  ngOnInit(): void {
    this.authService.getAllItems().subscribe((data) => {
      this.listDetails = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as usersDetails), //genereic type spread is not supported
        } as usersDetails; //User is my interface name
      });
    });
  }
  deleteUserData(UName: string) {
    this.authService.deleteUserData(UName);
  }
}
