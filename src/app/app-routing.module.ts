import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PacienteComponent } from "./paciente/paciente.component";
import { Grafico01Component } from "./grafico01/grafico01.component";
import { Grafico02Component } from "./grafico02/grafico02.component";

const routes: Routes = [
  { path: "pacientes", component: PacienteComponent },
  { path: "grafico01", component: Grafico01Component },
  { path: "grafico02", component: Grafico02Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
