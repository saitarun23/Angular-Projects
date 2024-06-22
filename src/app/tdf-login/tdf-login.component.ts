import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyService } from '../custom.service';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-tdf-login',
  templateUrl: './tdf-login.component.html',
  styleUrls: ['./tdf-login.component.css']
})
export class TdfLoginComponent {
  msg:string ="";
  constructor(public ls:LoginService){  // DI for Service class 

  }

  checkUser(logingRef:NgForm): void {
    console.log("event fired")
    console.log(logingRef.value)
    let login = logingRef.value;
   alert(JSON.stringify(logingRef.value))
  //   if(login.emailid=="akash@gmail.com" && login.password=="123"){
  //       this.msg="successfully login";
  //   }else {
  //     this.msg="failure";
  //   }
  //   logingRef.reset();
  // }
  // let obj = new MyService();
  //   this.msg = obj.checkUserInfo(login);
  this.msg = this.ls.checkUserInfo(login);
    logingRef.reset();
   
  }
}
