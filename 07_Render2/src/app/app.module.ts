import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { Cp6Directive } from './cp6.directive';
import { Cp7Directive } from './cp7.directive';
import { Cp8Directive } from './cp8.directive';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Cp6Directive,
    Cp7Directive,
    Cp8Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
