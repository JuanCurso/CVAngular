import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReclamacionesComponent } from './reclamaciones/reclamaciones.component';

//Toastr
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//servicios
import { ReclamacionesService } from './servicios/reclamaciones.service';

//formulario
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ReclamacionesComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [ReclamacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
