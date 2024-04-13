import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnlockedRouteComponent } from './unlocked-route/unlocked-route.component';
import { routeguardGuard } from './routeguard.guard';

const routes: Routes = [
  {
    path: 'unlock-route',
    component: UnlockedRouteComponent,
    canActivate: [routeguardGuard]
  },
  { path: 'first-module', loadChildren: () => import('./modules/first-module-routing/first-module-routing.module').then(m => m.FirstModuleRoutingModule) },
 { path: 'second-module', loadChildren: () => import('./modules/second-module-routing/second-module-routing.module').then(m => m.SecondModuleRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
