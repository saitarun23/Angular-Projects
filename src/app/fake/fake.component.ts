import { Component, OnInit } from '@angular/core';
import { FakeService } from '../fake.service';
import { Fake } from '../fake';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit{
  //fakeInfo:Array<Fake>=[];    // here fakeInfo is reference of array of Fake class. 
  fakeInfo:Fake[]=[];
  constructor(public fs:FakeService){  // DI for FakeService 

  }
  
ngOnInit(): void {
  this.loadFakeData();
}
  loadFakeData(): void {
    //alert("event fired")
    this.fs.loadFakeService()   // calling service layer 

    this.fs.loadFakeServiceInfo().subscribe({
    next:(result:any)=> {
        //console.log(result)
        this.fakeInfo=result;   // storing all data in fakeInfo array object. 
    } ,
    error:(error:any)=> {
        console.log(error)
    },
    complete:()=> {
      console.log("done in component")
    } 

    })
  }
}