import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, DataService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signinForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private dataService: DataService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
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
    this.authService.create(this.signinForm.value)
      .subscribe({
        next: (res) => {
          res.user.displayName = res.user.firstName + ' ' + res.user.lastName;
          localStorage.setItem('loggedInUser', JSON.stringify(res));
          this.dataService.sendData(res.user);
          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || ''
          this.router.navigateByUrl(returnUrl);
        },
        error: (e) => console.error(e)
      })

  }

}
