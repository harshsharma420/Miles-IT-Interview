import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss']
})
export class C2Component {
  message: string = "";
  @Input() massage = '';
  @Output() essage = new EventEmitter<string>();

  onKeyUp($event:any){
    this.essage.emit(this.message);
  }
}
