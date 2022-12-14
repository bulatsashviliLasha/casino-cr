import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SliderComponent} from './components/slider/slider.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HeaderComponent} from './components/header/header.component';
import {CategoriesWithSlotsComponent} from './components/categories-with-slots/categories-with-slots.component';
import {SlotsComponent} from './components/categories-with-slots/slots/slots.component';
import {
  StaticCategoriesComponent
} from './components/categories-with-slots/static-categories/static-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    CategoriesWithSlotsComponent,
    SlotsComponent,
    StaticCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
