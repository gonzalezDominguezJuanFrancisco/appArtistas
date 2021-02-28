import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GrupoService } from "../grupo.service";
import { Grupo } from "../models/Grupo";
import { Miembro } from "../models/Miembro";
import { Cancion } from "../models/Cancion";
import { Location } from "@angular/common";

@Component({
  selector: "app-grupo",
  templateUrl: "./grupo.component.html",
  styleUrls: ["./grupo.component.css"]
})
export class GrupoComponent implements OnInit {
  grupo: Grupo;
  grupoApi = null;

  constructor(
    private route: ActivatedRoute,
    private grupoService: GrupoService,
    private location: Location
  ) {}

  getGrupo(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.grupoService.getGrupo(id).subscribe(g => {
      this.grupoApi = g;
      let miembros: Array<Miembro> = new Array();
      for (let miembro of this.grupoApi[0].miembros) {
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
      for (let cancion of this.grupoApi[0].canciones) {
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
      this.grupo = new Grupo(
        this.grupoApi.id,
        this.grupoApi.nombre,
        this.grupoApi.grupo,
        this.grupoApi.activo,
        this.grupoApi.oyentesSpotify,
        this.grupoApi.oyentesYoutube,
        this.grupoApi.genero,
        this.grupoApi.fechaCreacion,
        canciones,
        miembros
      );
    });
  }

  add(
    nombre: string,
    puesto: string,
    fechaNacimiento: string,
    fundador: string,
    actual: string
  ) {
    const nombre2 = nombre;
    const puesto2 = puesto;
    const fechaNacimiento2 = new Date(fechaNacimiento);
    const fundador2 = Boolean(fundador);
    const actual2 = Boolean(actual);

    const newDoc: any = {
      grupo: this.grupo.nombre,
      nombre: nombre2,
      puesto: puesto2,
      fechaNacimiento: fechaNacimiento2,
      fundador: fundador2,
      actual: actual2
    };

    this.grupoService.addGrupo(newDoc).subscribe(j => {
      const miembroTmp: any = newDoc;
      this.grupo.miembros.push(miembroTmp);
    });
  }

  save(
    nombre: string,
    grupo: string,
    activo: string,
    oyentesSpotify: string,
    oyentesYoutube: string,
    genero: Array<string>,
    fechaCreacion: string
    ): void {
    const nombre2 = nombre;
    const grupo2 = Boolean(grupo);
    const activo2 = Boolean(activo);
    const oyentesSpotify2 = parseInt(oyentesSpotify);
    const oyentesYoutube2 = parseInt(oyentesYoutube);
    const genero2 = genero;
    const fechaCreacion2 = new Date(fechaCreacion);

    const doc = {
      id: this.grupo.id,
      nombre: nombre2,
      grupo: grupo2,
      activo: activo2,
      oyentesSpotify: oyentesSpotify2,
      oyentesYoutube: oyentesYoutube2,
      genero: genero2,
      fechaCreacion: fechaCreacion2
    };
    this.grupoService.updateGrupo(doc).subscribe(() => this.goBack());
  }

  delete(miembro: Miembro): void {
    this.grupo.miembros.forEach((m, index) => {
      if (m === miembro) this.grupo.miembros.splice(index, 1);
    });
    this.grupoService.deleteMiembro(miembro).subscribe();
  }

  delete2(cancion: Cancion): void {
    this.grupo.canciones.forEach((c, index) => {
      if (c === cancion) this.grupo.canciones.splice(index, 1);
    });
    this.grupoService.deleteCancion(cancion).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getGrupo();
  }
}
