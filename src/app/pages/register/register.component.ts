import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, FormGroup, ValidationErrors } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from '@angular/common/http';
import { IResponseBody } from 'src/app/shared/interfaces/http';
import { Router } from '@angular/router';

const passwordValidator: ValidatorFn = (userForm: FormGroup): ValidationErrors => {
  const password = userForm.get('password');
  const confirmPassword = userForm.get('confirmPassword');
  if (password?.value && confirmPassword?.value && password.value !== confirmPassword.value) {
    return { equal: true }
  } else return null
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    email: ['', Validators.email],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    confirmPassword: ['']
  }, {
    validators: passwordValidator
  })

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  public submitHandler() {
    const { username, password, email } = this.userForm.value;
    this.http.post<IResponseBody<string>>('/api/', { username, password, email }).subscribe((res) => {
      if (res && res.success) {
        localStorage.setItem('jwt-token', res.data);
        this.router.navigate(['/login']);
      } else {
        this.snackBar.open(res ? res.message : '登录失败，请重试', null, {
          verticalPosition: 'top'
        });
      }
    })
  }

}
