import { Component } from '@angular/core';
import { ApiSerivcesService } from '../api-serivces.service';

@Component({
  selector: 'app-ng-aftercontentinit',
  templateUrl: './ng-aftercontentinit.component.html',
  styleUrl: './ng-aftercontentinit.component.css'
})
export class NgAftercontentinitComponent {
isNaN(arg0: number) {
throw new Error('Method not implemented.');
}

  num1!: number;
  num2!: number;
  selectedOperation!: string;
  result!: number;

  constructor(private apiSerivicesService: ApiSerivcesService) {}

  calculate(): void {
    switch (this.selectedOperation) {
      case 'add':
        this.result = this.apiSerivicesService.add(this.num1, this.num2);
        break;
      case 'subtract':
        this.result = this.apiSerivicesService.subtract(this.num1, this.num2);
        break;
      case 'multiply':
        this.result = this.apiSerivicesService.multiply(this.num1, this.num2);
        break;
      case 'divide':
        this.result = this.apiSerivicesService.divide(this.num1, this.num2);
        break;
      default:
        this.result = NaN;
        break;
    }
  }
}
