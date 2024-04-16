import { Component } from '@angular/core';
import { Observable , of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent {
  data$: any;

  constructor() {
    this.data$ = of(1, 2, 3, 4, 5).pipe(
      map((value: number) => value * 2)
    );
    this.data$.subscribe(console.log);
    console.log(this.data$);
    console.log("Hello from the Map Component");
  }

}
