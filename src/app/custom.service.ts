export class MyService {
    
    checkUserInfo(login:any):string {
        if(login.emailid=="akash@gmail.com" && login.password=="123"){
            return "success";
        }else {
            return "failure";
        }
    }
}