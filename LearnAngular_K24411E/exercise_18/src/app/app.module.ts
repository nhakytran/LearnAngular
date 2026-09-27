import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GroupCustomersComponent } from './components/group-customers/group-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupCustomersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
