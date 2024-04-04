import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {
  obser?: any;
  myObservable = new Observable((car) => {
    console.log('Car Starts');
    car.next('1');
    car.next('2');
    console.log("Middle of nexts");
    car.next('3');
    car.next('4');
    car.next('5');
    car.complete();
    console.log('Car Stops');
  })

  ngOnInit() {
    this.obser = this.myObservable.subscribe({
      next: (number) => {
        console.log(number);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log("complete");
      }
    })
  }


  ngOnDestroy() {
    console.log("Destroyed");
    this.obser.unsubscribe();
  }
}
