import { Component, OnInit } from "@angular/core";
import { GrupoService } from "../grupo.service";
import { Cancion } from "../models/Cancion";

@Component({
  selector: "app-canciones",
  templateUrl: "./canciones.component.html",
  styleUrls: ["./canciones.component.css"]
})

export class CancionesComponent implements OnInit {
  canciones: Array<Cancion> = [];
  cancionesApi = null;
  cancionesTmp: any;
  constructor(private grupoService: GrupoService) {}

  getCanciones() {
    this.grupoService.getCanciones().subscribe(canciones => {
      this.cancionesApi = canciones;
      for (let cancion of this.cancionesApi) {
        let c = new Cancion(
          cancion._id,
          cancion.nombre,
          cancion.duracion,
          cancion.grupo,
          cancion.album,
          cancion.spotify,
          cancion.youtube,
          cancion.fechaSalida,
          cancion.top50
        );
        this.canciones.push(c);
      }
    });
  }

  ngOnInit() {
    this.getCanciones();
  }
}
