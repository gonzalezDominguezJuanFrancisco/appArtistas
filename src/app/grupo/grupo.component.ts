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
  miembroTmp: any;
  cancionTmp: any;

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
          miembro._id,
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
        console.log(cancion._id)
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
          canciones.push(c);
        }
      this.grupo = new Grupo(
        this.grupoApi[0].id,
        this.grupoApi[0].nombre,
        this.grupoApi[0].grupo,
        this.grupoApi[0].activo,
        this.grupoApi[0].oyentesSpotify,
        this.grupoApi[0].oyentesYoutube,
        this.grupoApi[0].genero,
        this.grupoApi[0].fechaCreacion,
        canciones,
        miembros
      );
    });
  }

  add(
    nombre: string,
    puesto: Array<string>,
    fechaNacimiento: string,
    fundador: string,
    actual: string
  ) {
    const nombre2 = nombre;
    const puesto2 = puesto;
    const fechaNacimiento2 = new Date(fechaNacimiento);
    const fundador2 = Boolean(JSON.parse(fundador));
    const actual2 = Boolean(JSON.parse(actual));

    const newDoc: any = {
      grupo: this.grupoApi[0].nombre,
      nombre: nombre2,
      puesto: puesto2,
      fechaNacimiento: fechaNacimiento2,
      fundador: fundador2,
      actual: actual2
    };

    this.grupoService.addMiembro(newDoc).subscribe(j => {
      const miembroTmp: any = newDoc;
      this.grupo.miembros.push(miembroTmp);
    });
  }

  add2(
    nombre: string,
    duracion: string,
    album: string,
    spotify: string,
    youtube: string,
    fechaSalida: string,
    top50: string
  ) {
    const nombre2 = nombre;
    const duracion2 = parseInt(duracion);
    const album2 = album;
    const spotify2 = parseInt(spotify);
    const youtube2 = parseInt(youtube);
    const fechaSalida2 = new Date(fechaSalida);
    const top502 = Boolean(JSON.parse(top50));

    const newDoc: any = {
      nombre: nombre2,
      duracion: duracion2,
      grupo: this.grupoApi[0].nombre,
      album: album2,
      spotify: spotify2,
      youtube: youtube2,
      fechaSalida: fechaSalida2,
      top50: top502
    };

    this.grupoService.addCancion(newDoc).subscribe(j => {
      const cancionTmp: any = newDoc;
      this.grupo.miembros.push(cancionTmp);
    });
  }

  save(
    grupo: string,
    activo: string,
    oyentesSpotify: string,
    oyentesYoutube: string,
    genero: Array<string>,
    fechaCreacion: string
    ): void {
    const grupo2 = Boolean(JSON.parse(grupo));
    const activo2 = Boolean(JSON.parse(activo));
    const oyentesSpotify2 = parseInt(oyentesSpotify);
    const oyentesYoutube2 = parseInt(oyentesYoutube);
    const genero2 = genero;
    const fechaCreacion2 = new Date(fechaCreacion);

    const doc = {
      id: this.grupoApi[0].id,
      nombre: this.grupoApi[0].nombre,
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
