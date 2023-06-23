import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  subscription: Subscription;
  loggedInUser: any = {};

  constructor(private router: Router,
    private dataService: DataService) {
    this.subscription = this.dataService.getData().subscribe(data => {
      if (data) {
        this.loggedInUser = data
      }
    });
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('loggedInUser')!) ?? {};
    if (user)
      this.loggedInUser = user.user
  }

  logout() {
    localStorage.clear();
    this.loggedInUser = {};
    this.router.navigate(['/'])
  }

}
