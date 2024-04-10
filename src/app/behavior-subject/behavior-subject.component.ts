import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent {
  behaviorSubject = new BehaviorSubject<string>('hello');

  nextValue = this.behaviorSubject.next('asd');
  
  subscription = this.behaviorSubject.subscribe({
    next : res => {
      console.log(res);
    }, error: err => {
      console.error(err);
    },complete: () => {
      console.log("behaviorComplete")
    }
  });

  

}
