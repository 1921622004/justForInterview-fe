import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, FormGroup, ValidationErrors } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { IResponseBody } from 'src/app/shared/interfaces/http';
import { MatSnackBar } from '@angular/material/snack-bar';

const passwordValidator: ValidatorFn = (userForm: FormGroup): ValidationErrors => {
  const password = userForm.get('password');
  const confirmPassword = userForm.get('confirmPassword');
  if (password?.value && confirmPassword?.value && password.value !== confirmPassword.value) {
    return { equal: true }
  } else return null
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    password: ['', Validators.required],
  }, {
    validators: passwordValidator
  })

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  public submitHandler() {
    this.http.post<IResponseBody<string>>('/api/user/login', this.userForm.value).subscribe((res) => {
      if (res && res.success) {
        this.snackBar.open('欢迎', null, { verticalPosition: 'top', duration: 2000 });
        localStorage.setItem('jwt-token', res.data);
      } else {
        this.snackBar.open('登录失败，请重试', null, { verticalPosition: 'top', duration: 2000 });
      }
    })
  }

}
