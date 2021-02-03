import { Component, OnInit } from "@angular/core";

// Deberemos importar tanto los modulos de highcharts, además del servicio y clase de nuestro componente (Paciente)

import * as Highcharts from "highcharts";
import { PacienteService } from "../paciente.service";

@Component({
  selector: "app-grafico01",
  templateUrl: "./grafico01.component.html",
  styleUrls: ["./grafico01.component.css"]
})
export class Grafico01Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie"
    },
    title: {
      text: "Cantidad de usuarios en los servidores"
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [
      {
        name: "Usuarios",
        type: "pie",
        colorByPoint: true,
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

        const kk = misDatos.map((x: any) => {
          return { name: x.name, y: x.usuarios };
        });

        console.log(kk);
        this.chartOptions.series[0]["data"] = kk;
        // ];

        //dataSeries;

        Highcharts.chart("grafico01", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}
