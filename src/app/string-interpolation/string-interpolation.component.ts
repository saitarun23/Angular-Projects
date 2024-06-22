import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
  id:number =100;
  name:string="ravi";
  salary:number=12000.50;
  result:boolean=true;

    sayHello(name:string):string{
      return "Welcome user"+name
    }

}
