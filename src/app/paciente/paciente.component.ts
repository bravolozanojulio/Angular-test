// Importaciones correspondientes

import { Component, OnInit } from "@angular/core";
import { Paciente } from "../pacientes";
import { PacienteService } from "../paciente.service";

@Component({
  selector: "app-paciente",
  templateUrl: "./paciente.component.html",
  styleUrls: ["./paciente.component.css"]
})
export class PacienteComponent implements OnInit {
  // Variables que se van a inicializar

  pacientes: Paciente[];
  pacienteApi = null;
  pacientesel: Paciente;
  pacienteTmp: any;

  constructor() {}

  // Metodos

  // Inicio

  ngOnInit() {}
}
