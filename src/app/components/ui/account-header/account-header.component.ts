import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.scss']
})
export class AccountHeaderComponent implements OnInit {

  constructor(private router: Router) {

   }

  ngOnInit() {
  }
  signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    this.router.navigate([''])
  }
}
