import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { InbuiltPipesComponent } from './inbuilt-pipes/inbuilt-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { TablePipe } from './table.pipe';
import { ObservablesComponent } from './observables/observables.component';
import { RouteGuardComponent } from './route-guard/route-guard.component';
import { UnlockedRouteComponent } from './unlocked-route/unlocked-route.component';
import { TrackByComponent } from './track-by/track-by.component';
import { TokenInterceptor } from './token.interceptor';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    ViewChildComponent,
    InbuiltPipesComponent,
    CustomPipesComponent,
    TablePipe,
    ObservablesComponent,
    RouteGuardComponent,
    UnlockedRouteComponent,
    TrackByComponent,
    AsyncPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
