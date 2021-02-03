import { Injectable } from "@angular/core";

// Deberemos importart nuestros otros servicios y nuestra clase

import { HttpClient } from "@angular/common/http";
import { Paciente } from "./pacientes";

@Injectable({
  providedIn: "root"
})
export class PacienteService {
  private url = "https://5fc9f2373c1c22001644153d.mockapi.io/julio/datos/servidores";
  constructor(private http: HttpClient) {}

  getPacientesApi() {
    return this.http.get(this.url);
  }

  getPaciente(id: number) {
    const url = `${this.url}/${id}`;
    return this.http.get(url);
  }
}
