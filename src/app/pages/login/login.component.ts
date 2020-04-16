import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, FormGroup, ValidationErrors } from "@angular/forms";

const passwordValidator: ValidatorFn = (userForm: FormGroup): ValidationErrors => {
  const password = userForm.get('password');
  const confirmPassword = userForm.get('confirmPassword');
  if (password.value !== confirmPassword.value) {
    return { confirmPassword: '与密码不一致' }
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    email: ['', Validators.email],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    confirmPassword: ['']
  }, {
    validators: passwordValidator
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public submitHandler() {
  }

  public getUserErrorMessage() {
    let userNameControl = this.userForm.get('username');
    if (userNameControl.hasError('required')) {
      return '用户名不可为空'
    } else if (userNameControl.hasError('minlength')) {
      return '用户名过短'
    } else if (userNameControl.hasError('maxlength')) {
      return '用户名过长'
    } else return '';
  }

}
