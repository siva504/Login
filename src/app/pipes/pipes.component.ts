import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {


  name="Html Css Javascript AngularJs ReactJS NodeJs MongoDB Sql AWS Docker Jenkins Github";
  salary=43750;
  messages = [
    { text: 'Hello', timestamp: new Date() },
    { text: 'How are you?', timestamp: new Date(Date.now() - 60000) }, 
    { text: 'Good morning', timestamp: new Date(Date.now() - 3600000) }, 
    { text: 'Yesterday', timestamp: new Date(Date.now() - 86400000) } 
  ];
  formatTimestamp(timestamp: Date): string {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return days === 1 ? 'yesterday' : days + ' days ago';
    } else if (hours > 0) {
      return hours === 1 ? 'an hour ago' : hours + ' hours ago';
    } else if (minutes > 0) {
      return minutes === 1 ? 'a minute ago' : minutes + ' minutes ago';
    } else {
      return 'just now';
    }
  }
  wish="Welcome to custom pipes topic";
  newConcept="exclamation";


  email="";

  updateEmail(ip: { value: string; }){
    this.email=ip.value;
  }

}
