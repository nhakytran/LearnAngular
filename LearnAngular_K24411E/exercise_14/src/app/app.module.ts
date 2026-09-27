import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ServiceProductCatalogComponent } from './components/service-product-catalog/service-product-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceProductCatalogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
