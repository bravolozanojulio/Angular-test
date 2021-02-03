import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from "highcharts-angular";
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { PacienteComponent } from "./paciente/paciente.component";
import { Grafico02Component } from "./grafico02/grafico02.component";
import { PacienteService } from "./paciente.service";
import { AppRoutingModule } from "./app-routing.module";
import { Grafico01Component } from './grafico01/grafico01.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    PacienteComponent,
    Grafico02Component,
    Grafico01Component
  ],
  bootstrap: [AppComponent],
  providers: [PacienteService, PacienteService,{provide: APP_BASE_HREF, useValue: '/pacientes'}]
})
export class AppModule {}
