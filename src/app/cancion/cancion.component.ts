import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GrupoService } from "../grupo.service";
import { Cancion } from "../models/Cancion";
import { Location } from "@angular/common";

@Component({
  selector: "app-cancion",
  templateUrl: "./cancion.component.html",
  styleUrls: ["./cancion.component.css"]
})
export class CancionComponent implements OnInit {
  cancion: Cancion;
  cancionApi = null;

  constructor(
    private route: ActivatedRoute,
    private grupoService: GrupoService,
    private location: Location
  ) {}

  getCancion(): void {
    let nombre = this.route.snapshot.paramMap.get("nombre");
    let n = nombre.split("&");

    nombre = n[0];
    let grupo = n[1];
    console.log(grupo, nombre);

    this.grupoService.getCancion(grupo, nombre).subscribe(c => {
      this.cancionApi = c;
      this.cancion = new Cancion(
        this.cancionApi.nombre,
        this.cancionApi.duracion,
        this.cancionApi.grupo,
        this.cancionApi.album,
        this.cancionApi.spotify,
        this.cancionApi.youtube,
        this.cancionApi.fechaSalida,
        this.cancionApi.top50,
      );
    });
    console.log(grupo);
  }

  save(
    duracion: string,
    album: string,
    spotify: string,
    youtube: string,
    fechaSalida: string,
    top50: string
  ): void {
    const duracion2 = parseInt(duracion);
    const album2 = album;
    const spotify2 = parseInt(spotify);
    const youtube2 = parseInt(youtube);
    const fechaSalida2 = new Date(fechaSalida);
    const top502 = Boolean(top50);

    const doc = {
      nombre: this.cancion.nombre,
      duracion: duracion2,
      album: album2,
      grupo: this.cancion.grupo,
      spotify: spotify2,
      youtube: youtube2,
      fechaSalida: fechaSalida2,
      top50: top502
    };
    this.grupoService.updateCancion(doc).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getCancion();
  }
}
