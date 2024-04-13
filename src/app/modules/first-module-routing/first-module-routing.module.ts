import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FirstModuleComponentComponent } from '../first-module/first-module-component/first-module-component.component';

const routes: Routes = [{ path: '', component: FirstModuleComponentComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FirstModuleRoutingModule { }
