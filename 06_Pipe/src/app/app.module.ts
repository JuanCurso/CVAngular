import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormatoNombrePipe } from './formato-nombre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormatoNombrePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
