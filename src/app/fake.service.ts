import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fake } from './fake';
@Injectable({
  providedIn: 'root'  // it is equal to provider attribute in app.module.ts 
})
export class FakeService {

  constructor(public http:HttpClient) { } // DI for HttpClient 


  loadFakeService(): void {
    
    this.http.get("https://fakestoreapi.com/products").subscribe({
      next:(result:any)=>{
            console.log(result)
      },
      error:(error:any)=> {
        console.log("Error called"+error)
      },
      complete:()=> {
        console.log("done!")
      }
    })
  }
  //it call rest api and those information convert to Fake[] object. 
  
  loadFakeServiceInfo():Observable<Fake[]>{
      return this.http.get<Fake[]>("https://fakestoreapi.com/products");
  }


}