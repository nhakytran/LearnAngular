import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ServiceProductImageEventComponent } from './components/service-product-image-event/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './components/service-product-image-event-detail/service-product-image-event-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceProductImageEventComponent,
    ServiceProductImageEventDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
