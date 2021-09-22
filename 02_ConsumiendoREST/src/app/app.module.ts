import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonaComponent } from './persona/persona.component';
import { HomePubliComponent } from './home-publi/home-publi.component';
import { PublicarComponent } from './publicar/publicar.component';

import { PersonaService } from './servicios/persona.service';
import { PublicacionService } from './servicios/publicacion.service';

import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabeceraComponent } from './cabecera/cabecera.component';

const routes: Routes = [
  {path:"", component: InicioComponent},
  {path:"personas", component: PersonaComponent},
  {path:"publicaciones", component: HomePubliComponent},
  {path:"publicaciones/publicar", component: PublicarComponent},
  {path:"**", component: InicioComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PersonaComponent,
    CabeceraComponent,
    HomePubliComponent,
    PublicarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PersonaService,
    PublicacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
