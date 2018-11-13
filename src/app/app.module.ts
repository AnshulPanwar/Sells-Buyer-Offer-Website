import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellsLegosAngularLibModule } from 'sells-legos-angular-lib';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
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
