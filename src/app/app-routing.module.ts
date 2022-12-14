import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/slots',
    pathMatch: 'full'
  },
  {
    path: 'slots',
    component: AppComponent,
  },
  {
    path: 'sport',
    component: AppComponent
  },
  {
    path: 'casino',
    component: AppComponent
  },
  {
    path: 'live',
    component: AppComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
