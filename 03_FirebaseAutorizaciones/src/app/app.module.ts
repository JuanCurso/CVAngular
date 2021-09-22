import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Toastr
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//formulario
import { FormsModule } from '@angular/forms'

//Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

//componentes
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PrivadoComponent } from './componentes/privado/privado.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';

//servicios
import { UsuarioService } from './servicios/usuario.service';

//guard
import { AuthGuard } from './seguridad/auth.guard';

//routes
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"registro", component: RegistroComponent},
  {path:"privado", component: PrivadoComponent, canActivate: [AuthGuard]},
  {path:"**", component: NotFoundPageComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    CabeceraComponent,
    PrivadoComponent,
    NotFoundPageComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule

  ],
  providers: [
  UsuarioService,
  AngularFireAuth,
  AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
