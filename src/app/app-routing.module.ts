import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GruposComponent } from "./grupos/grupos.component";
import { RouterModule, Routes } from "@angular/router";
import { GrupoComponent } from "./grupo/grupo.component";
import { MiembroComponent } from "./miembro/miembro.component";
import { MiembrosComponent } from "./miembros/miembros.component";
import { CancionComponent } from "./cancion/cancion.component";
import { CancionesComponent } from "./canciones/canciones.component";
import { Grafico1Component } from "./grafico1/grafico1.component";
import { Grafico2Component } from "./grafico2/grafico2.component";
import { Grafico3Component } from "./grafico3/grafico3.component";

const routes: Routes = [
  { path: "grupos", component: GruposComponent },
  { path: "getGrupo/:id", component: GrupoComponent },
  { path: "miembro/:nombre", component: MiembroComponent },
  { path: "cancion/:nombre", component: CancionComponent },
  { path: "miembros", component: MiembrosComponent },
  { path: "canciones", component: CancionesComponent },
  { path: "grafico1", component: Grafico1Component },
  { path: "grafico2", component: Grafico2Component },
  { path: "grafico3", component: Grafico3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
