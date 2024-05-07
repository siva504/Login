import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-onchages',
  templateUrl: './ng-onchages.component.html',
  styleUrl: './ng-onchages.component.css'
})
export class NgOnchagesComponent implements OnChanges {
 

  @Input() inputValue?:number;
  currentValue?:number;
  previousValue?:number;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Input property changed', changes);
    // throw new Error('Method not implemented.');
    if(changes['inputValue']){
      this.currentValue=changes['inputValue'].currentValue;
      this.previousValue=changes['inputValue'].previousValue; 
    }
  }
  
}
