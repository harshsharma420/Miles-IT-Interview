import { Component } from '@angular/core';
import { filter, of } from 'rxjs';
@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.scss']
})
export class FilterOperatorComponent {
  users = [
    {
      id: '1',
      name: 'John',
      isActive: true
    },
    {
      id: '2',
      name: 'Markesh',
      isActive: true
    },
    {
      id: '3',
      name: 'Messiah',
      isActive: true
    }
  ];

  users$ = of(this.users);
  filteredUsers$ = this.users$.pipe(filter(value => value.every(user => user.isActive)))

  ngOnInit(){
    this.filteredUsers$.subscribe(console.log);
  }
}
