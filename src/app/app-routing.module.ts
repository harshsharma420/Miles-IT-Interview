import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnlockedRouteComponent } from './unlocked-route/unlocked-route.component';
import { routeguardGuard } from './routeguard.guard';

const routes: Routes = [
  {
    path: 'unlock-route',
    component: UnlockedRouteComponent,
    canActivate: [routeguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
