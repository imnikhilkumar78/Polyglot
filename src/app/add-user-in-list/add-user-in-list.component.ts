/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { usersDetails } from '../shared/services/usersDetails';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-in-list',
  templateUrl: './add-user-in-list.component.html',
  styleUrls: ['./add-user-in-list.component.css'],
})
export class AddUserInListComponent implements OnInit {
  form: FormGroup;
  showMsg = false;

  constructor(
    private readonly fb: FormBuilder,
    private router: Router,
    public authService: AuthService
  ) {}
  ngOnInit(): void {}
  onSubmit() {
    const userData = this.authService.form.value;

    this.authService.createNewUser(userData);
    this.showMsg = true;

    this.authService.form.reset();
  }
}
