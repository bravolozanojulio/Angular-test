import { Component, OnInit } from "@angular/core";

// Deberemos importar tanto los modulos de highcharts, además del servicio y clase de nuestro componente (Paciente)

import * as Highcharts from "highcharts";
import { PacienteService } from "../paciente.service";

@Component({
  selector: "app-grafico02",
  templateUrl: "./grafico02.component.html",
  styleUrls: ["./grafico02.component.css"]
})
export class Grafico02Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: "column"
    },
    title: {
      text: "Gigas disponibles en los servidores"
    },
    xAxis: {
      categories: []
    },
    yAxis: {},

    series: [
      {
        name: "Gigas disponibles",
        type: "column",
        data: []
      }
    ],
    noData: {
      style: {
        fontWeight: "bold",
        fontSize: "15px",
        color: "#303030"
      }
    }
  };

  constructor(private pacientesService: PacienteService) {}

  ngOnInit() {
    this.getMisDatos();
  }

  getMisDatos() {
    this.pacientesService.getPacientesApi().subscribe(
      result => {
        const misDatos: any = result;
        
        const dataSeries = misDatos.map((x: any) => x.espacio - x.usuarios * 2);
        const dataCategorias = misDatos.map((x: any) => x.name);

        this.chartOptions.series[0]["data"] = dataSeries;
        this.chartOptions.xAxis["categories"] = dataCategorias;

        Highcharts.chart("grafico02", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}
