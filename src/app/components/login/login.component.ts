import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signinForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.setLoginForm()
  }

  ngOnInit(): void {
  }

  setLoginForm() {
    this.signinForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    })
  }

  signin() {
    console.log(this.signinForm.value);
    
  }

}
