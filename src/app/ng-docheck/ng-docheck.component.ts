import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-ng-docheck',
  templateUrl: './ng-docheck.component.html',
  styleUrl: './ng-docheck.component.css'
})
export class NgDocheckComponent implements DoCheck {

  userName:string=' ';
  previousUserName:string='';
  greeting:string='';

  ngDoCheck(): void {
    if (this.userName !== this.previousUserName) {
      this.previousUserName = this.userName;
      this.updateGreeting();
    }
  }
  updateGreeting() {
    if (this.userName.trim() === '') {
      this.greeting = 'Hello, Stranger!';
    } else {
      this.greeting = `Hello, ${this.userName}!`;
    }
  }


}
