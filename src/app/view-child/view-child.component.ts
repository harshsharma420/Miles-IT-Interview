import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {

  @ViewChild('input' , {static: true}) myCustomInput:any;

  ngOnInit(){
    this.myCustomInput.nativeElement.focus();
  }
  onClick(input: any, para:any) {
    console.log(input.value);
    console.log(para.innerText);
  }
}
