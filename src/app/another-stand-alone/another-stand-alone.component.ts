import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-another-stand-alone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './another-stand-alone.component.html',
  styleUrls: ['./another-stand-alone.component.scss']
})
export class AnotherStandAloneComponent {

}
