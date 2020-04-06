import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userForm = this.fb.group({
    userName: ['1', Validators.required],
    email: ['1', Validators.email],
    password: ['1', Validators.required],
    confirmPassword: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
