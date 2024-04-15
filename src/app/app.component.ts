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

  movies=['RRR','Pushpa','Devara','Pushpa2'];


  showHeading=true;
  // Data="";
 Data=['RRR','Pushpa','Devara','Pushpa2'];

 MoviesName=[
  {name:'RRR',year:2022},
  {name:'Pushpa',year:2021},
  {name:'Devara',year:2024},
  {name:'Pushpa2',year:2024}
 ]
}
