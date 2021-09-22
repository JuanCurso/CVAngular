import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpClient: HttpClient) { }

  obtenerPersonas(): Observable<any> {
  	return this.httpClient.get("http://localhost:8080/persona");
  }

  anadirPersona(persona: any) {

  	return this.httpClient.post(
  		"http://localhost:8080/persona",
  		JSON.stringify(persona),
  		{headers: new HttpHeaders().set("Content-Type", "application/json")}
  	);

  }

  eliminarPersona(id): Observable<any>{
  	return this.httpClient.delete("http://localhost:8080/persona/" + id);
  }
}
