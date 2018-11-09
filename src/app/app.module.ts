import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellsLegosAngularLibModule } from 'sells-legos-angular-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SellsLegosAngularLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
