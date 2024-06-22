import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent {
  msg:string="";
  passvalue(nameRef:any):void{
    let name=nameRef.value
    alert("Welcome User "+name)
  }

  checkUser(a:any,b:any):void{
    let emailid=a.value;
    let password=b.value;

    if(emailid=="akash@gmail.com" && password=="123"){
      this.msg="success"
  }else {
      this.msg="failure"
  }

  a.value=""    // we want reset value in text field 
  b.value=""

  }
}
