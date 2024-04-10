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
  subscription: any;
  subscribe?: string;
  ngOnInit() {
    this.subscription = this.behaviorSubject.subscribe({
      next: res => {
        console.log(res);
        this.subscribe = res;
      }, error: err => {
        console.error(err);
      }, complete: () => {
        console.log("behaviorComplete")
      }
    });

  }

  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  nextValueButton(){
    this.nextValue = this.behaviorSubject.next(this.generateString(5))
  }
  characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  generateString(length:any) {
      let result = ' ';
      const charactersLength = this.characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += this.characters.charAt(Math.floor(Math.random() * charactersLength));
      }
  
      return result;
  }
}
