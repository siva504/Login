import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-oninit',
  templateUrl: './ng-oninit.component.html',
  styleUrl: './ng-oninit.component.css'
})
export class NgOninitComponent {
  ngOnInit(): void {
    console.log('welcome');
  }
}
