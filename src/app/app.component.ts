import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Login';

  city = "Rajahmundry";

  updateCity(){
    this.city = "Hyderabad";
  }


  show=true;
}
