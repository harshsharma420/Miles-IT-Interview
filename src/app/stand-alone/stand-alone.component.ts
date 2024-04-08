import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnotherStandAloneComponent } from '../another-stand-alone/another-stand-alone.component';

@Component({
  selector: 'app-stand-alone',
  standalone: true,
  imports: [CommonModule,AnotherStandAloneComponent],
  templateUrl: './stand-alone.component.html',
  styleUrls: ['./stand-alone.component.scss']
})
export class StandAloneComponent {

}
