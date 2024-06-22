import { Injectable } from "@angular/core";


@Injectable()
export class LoginService{
     
    checkUserInfo(login:any):string {
        if(login.emailid=="akash@gmail.com" && login.password=="123"){
            return "success";
        }else {
            return "failure";
        }
    }
}