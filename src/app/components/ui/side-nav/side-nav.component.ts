import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  checkuser() {
    var type= localStorage.getItem("accountType");
    if (type == "user"){
      return true;
    }
    else {
    return false;
    }
  }
  checkadmin() {
    var type= localStorage.getItem("accountType");
    if (type == "admin"){
      return true;
    }
    else {
    return false;
    }
  }
}
