import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from "highcharts-angular";

import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from "./app.component";
import { GrupoService } from "./grupo.service";
import { GruposComponent } from "./grupos/grupos.component";
import { AppRoutingModule } from "./app-routing.module";
import { GrupoComponent } from "./grupo/grupo.component";
import { MiembroComponent } from "./miembro/miembro.component";
import { MiembrosComponent } from "./miembros/miembros.component";
import { CancionComponent } from "./cancion/cancion.component";
import { CancionesComponent } from "./canciones/canciones.component";
import { Grafico1Component } from "./grafico1/grafico1.component";
import { Grafico2Component } from "./grafico2/grafico2.component";
import { Grafico3Component } from "./grafico3/grafico3.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  declarations: [
    AppComponent,
    GruposComponent,
    GrupoComponent,
    MiembroComponent,
    MiembrosComponent,
    CancionComponent,
    CancionesComponent,
    Grafico1Component,
    Grafico2Component,
    Grafico3Component
  ],
  bootstrap: [AppComponent],
  providers: [GrupoService, {provide: APP_BASE_HREF, useValue: '/grupos'}]
})
export class AppModule {}