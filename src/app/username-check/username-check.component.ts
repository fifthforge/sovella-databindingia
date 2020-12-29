import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-check',
  templateUrl: './username-check.component.html',
  styleUrls: ['./username-check.component.css']
})
export class UsernameCheckComponent implements OnInit {
username : string = ""
buttonDeactivated : boolean = true;
userNameBox = "userNameBox"

  constructor() { 
  }

  ButtonActivityFilter() {
    if (this.username.length > 0) {
      this.buttonDeactivated = false;
      this.userNameBox = "userNameBox2"
    } else {
      this.buttonDeactivated = true;
      this.userNameBox = "userNameBox"
    }
  }

  EraseInputText() {
    this.username = "";
    this.userNameBox = "userNameBox"
  }




  ngOnInit(): void {
  }

}
