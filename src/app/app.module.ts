import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// rxjsのオペレーターを一括import
import 'rxjs/Rx';
import { HttpModule } from '@angular/http'; // <- add this!

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, // <- add this!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
