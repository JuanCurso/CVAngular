import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(private httpClient: HttpClient) { }

  obtenerPublicacion(): Observable<any> {
  	return this.httpClient.get("http://localhost:8080/publicacion");
  }

  anadirPublicacion(publicacion: any) {

  	return this.httpClient.post(
  		"http://localhost:8080/publicacion",
  		JSON.stringify(publicacion),
  		{headers: new HttpHeaders().set("Content-Type", "application/json")}
  	);

  }

/*  eliminarPersona(id): Observable<any>{
  	return this.httpClient.delete("http://localhost:8080/persona/" + id);
  }
*/  
}
