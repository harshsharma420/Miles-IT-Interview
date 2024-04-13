import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondModuleComponentComponent } from '../second-module/second-module-component/second-module-component.component';

const routes: Routes = [{ path: '', component: SecondModuleComponentComponent }];


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
export class SecondModuleRoutingModule { }
