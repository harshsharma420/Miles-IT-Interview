import { Component } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipes',
  templateUrl: './inbuilt-pipes.component.html',
  styleUrls: ['./inbuilt-pipes.component.scss']
})
export class InbuiltPipesComponent {
  data = [
    {
      name: "Harsh Sharma",
      dob: Date.UTC(2002, 3, 21),
      salary: 60000
    },
    {
      name: "Ragini Sharma",
      dob: Date.UTC(1971, 11, 25),
      salary: 26000
    },
    {
      name: "Dinesh Sharma",
      dob: Date.UTC(1968, 8, 8),
      salary: 70000
    }
  ]
}
