import { Component, OnInit } from "@angular/core";
import { GrupoService } from "../grupo.service";
import { Grupo } from "../models/Grupo";
import { Miembro } from "../models/Miembro";
import { Cancion } from "../models/Cancion";

@Component({
  selector: "app-grupos",
  templateUrl: "./grupos.component.html",
  styleUrls: ["./grupos.component.css"]
})

export class GruposComponent implements OnInit {
  grupos: Array<Grupo> = [];
  gruposApi = null;
  gruposTmp: any;
  constructor(private grupoService: GrupoService) {}

  getGruposApi() {
    this.grupoService.getGruposApi().subscribe(grupos => {
      this.gruposApi = grupos;
      for (let grupo of this.gruposApi) {
        let miembros: Array<Miembro> = new Array();
        for (let miembro of grupo.miembros) {
          let m = new Miembro(
            miembro.grupo,
            miembro.nombre,
            miembro.puesto,
            miembro.fechaNacimiento,
            miembro.fundador,
            miembro.actual
          );
          miembros.push(m);
        }
        let canciones: Array<Cancion> = new Array();
        for (let cancion of grupo.canciones) {
          let c = new Cancion(
            cancion.nombre,
            cancion.duracion,
            cancion.grupo,
            cancion.album,
            cancion.spotify,
            cancion.youtube,
            cancion.fechaSalida,
            cancion.top50
          );
          canciones.push(c);
        }
        let g = new Grupo(
          grupo.id,
          grupo.nombre,
          grupo.grupo,
          grupo.activo,
          grupo.oyentesSpotify,
          grupo.oyentesYoutube,
          grupo.genero,
          grupo.fechaCreacion,
          grupo.canciones,
          grupo.miembros
        );
        this.grupos.push(g);
      }
    });
  }

  add(
    id: string,
    nombre: string,
    grupo: string,
    activo: string,
    oyentesSpotify: string,
    oyentesYoutube: string,
    genero: Array<string>,
    fechaCreacion: string,
  ) {
    const id2 = id;
    const nombre2 = nombre;
    const grupo2 = Boolean(grupo);
    const activo2 = Boolean(activo);
    const oyentesSpotify2 = parseInt(oyentesSpotify);
    const oyentesYoutube2 = parseInt(oyentesYoutube);
    const genero2 = genero;
    const fechaCreacion2 = new Date(fechaCreacion);

    const newDoc: any = {
      id: id2,
      nombre: nombre2,
      grupo: grupo2,
      activo: activo2,
      oyentesSpotify: oyentesSpotify2,
      oyentesYoutube: oyentesYoutube2,
      genero: genero2,
      fechaCreacion: fechaCreacion2
    };

    this.grupoService.addGrupo(newDoc).subscribe(g => {
      this.gruposTmp = newDoc;
      this.grupos.push(this.gruposTmp);
    });
  }

  ngOnInit() {
    this.getGruposApi();
  }
}
