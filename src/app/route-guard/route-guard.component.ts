import { Component } from '@angular/core';

@Component({
  selector: 'app-route-guard',
  templateUrl: './route-guard.component.html',
  styleUrls: ['./route-guard.component.scss']
})
export class RouteGuardComponent {
  token?: number;

  setToken($event: any) {
    console.log($event);
    localStorage.setItem('token', $event.key);
  }
}
