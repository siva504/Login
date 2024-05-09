import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-client-request',
  templateUrl: './http-client-request.component.html',
  styleUrl: './http-client-request.component.css'
})
export class HttpClientRequestComponent {

  products: any[] = [];

  constructor(private http:HttpClient){

  }

  getData(){
    this.http.get<any[]>("https://fakestoreapi.com/products")
    .subscribe((data)=>{
      this.products = data;
      console.log(data)
    })
  }
}
