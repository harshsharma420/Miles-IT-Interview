import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss']
})
export class CustomPipesComponent {
  data = [1, 5, 2, 3, 5, 46, 2, 1];
  multiple :number = 1;
}
