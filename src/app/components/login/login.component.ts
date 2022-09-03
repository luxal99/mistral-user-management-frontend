import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/http/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackbarService } from '../../util/service/snackbar.service';
import {
  ACCESS_TOKEN_LC,
  AUTHORIZATION_HEADER,
} from '../../util/constant/constant';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private snackBarService: SnackbarService,
    private router:Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.auth(this.loginForm.getRawValue()).subscribe(
      (response) => {
        localStorage.setItem(
          ACCESS_TOKEN_LC,
          <string>response.headers.get(AUTHORIZATION_HEADER)
        );
        this.router.navigate(['/admin'])
      },
      (err: HttpErrorResponse) => {
        console.log(err.error['message']);
        this.snackBarService.open(err.error['message']);
      }
    );
  }
}
