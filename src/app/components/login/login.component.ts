import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../service/http/auth.service";
import { HttpErrorResponse } from "@angular/common/http";
import { SnackbarService } from "../../util/service/snackbar.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  constructor(private authService: AuthService,private snackBarService:SnackbarService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.auth(this.loginForm.getRawValue())
      .subscribe((response) => {
        console.log(response.headers.get("authorization"));
      }, (err: HttpErrorResponse) => {
        console.log(err.error['message']);
        this.snackBarService.open(err.error['message'])
      });
  }

}
