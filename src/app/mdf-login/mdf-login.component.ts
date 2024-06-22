import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyService } from '../custom.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-mdf-login',
  templateUrl: './mdf-login.component.html',
  styleUrls: ['./mdf-login.component.css']
})
export class MdfLoginComponent {

loginRef = new FormGroup({
  emailid:new FormControl(),
  password:new FormControl()
});

constructor(public ls:LoginService){   // DI using constructor base 

}

msg:string ="";
checkUser():void {
  
  //alert("event fired")
  let login = this.loginRef.value;
  // if(login.emailid=="akash@gmail.com" && login.password=="123"){
  //     this.msg="successfully login"
  // }else {
  //     this.msg="failure try once again"
  // }
  //let obj = new MyService();
  //this.msg = obj.checkUserInfo(login);
  
  this.msg = this.ls.checkUserInfo(login);
  this.loginRef.reset();
}

}