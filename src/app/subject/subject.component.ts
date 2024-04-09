import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
  first_subscriber_subject?: number;
  second_subscriber_subject?: number;
  third_subscriber_subject?: number;
  subject = new Subject<number>();

  firstSubscribe = this.subject.subscribe({
    next:
      result => {
        this.first_subscriber_subject = result;
        console.log(result);
      }
  }
  );
  secondSubscribe = this.subject.subscribe({
    next: result => {
      this.second_subscriber_subject = result;
      console.log(result);
    }
  })

  thirdSubscribe = this.subject.subscribe({
    next: result => {
      this.third_subscriber_subject = result;
      console.log(result);
    }
  })

  firstNext = this.subject.next(Math.random() * 1000);
  secondNext = this.subject.next(Math.random() * 10);
  thirdNext = this.subject.next(Math.random() * 10000000);
  fourthNext?: any;

  nextSubject() {
    this.fourthNext = this.subject.next(Math.random());
  }
}
