import { Component } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss']
})
export class C1Component {
  message: string = "";
  childMessage : string = "";
  receiveMessage(data:string){
    this.childMessage = data;
  }
}
