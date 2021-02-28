import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Miembro } from "./models/Miembro";
import { Cancion } from "./models/Cancion";

@Injectable({ providedIn: "root" })
export class GrupoService {
  private url = "https://artistasapi.herokuapp.com";
  constructor(private http: HttpClient) {}

  getGruposApi() {
    const url = `https://artistasapi.herokuapp.com/getGrupos`;
    return this.http.get(url);
  }

  getMiembros() {
    const url = `https://artistasapi.herokuapp.com/getMiembros`;
    return this.http.get(url);
  }

  getCanciones() {
    const url = `https://artistasapi.herokuapp.com/getCanciones`;
    return this.http.get(url);
  }

  getGrupo(id: string) {
    const url = `https://artistasapi.herokuapp.com/getGrupo/${id}`;
    return this.http.get(url);
  }

  getMiembro(grupo: string, nombre: string) {
    const url = `https://artistasapi.herokuapp.com/getMiembro/${grupo}&${nombre}`;
    return this.http.get(url);
  }

  getCancion(grupo: string, nombre: string) {
    const url = `https://artistasapi.herokuapp.com/getCancion/${grupo}&${nombre}`;
    return this.http.get(url);
  }

  addGrupo(doc: any) {
    const url = "https://artistasapi.herokuapp.com/postGrupo";
    return this.http.post(this.url, doc);
  }

  addMiembro(doc: any) {
    const url = "https://artistasapi.herokuapp.com/postMiembro";
    return this.http.post(url, doc);
  }

  addCancion(doc: any) {
    const url = "https://artistasapi.herokuapp.com/postCancion";
    return this.http.post(url, doc);
  }

  updateGrupo(doc: any) {
    const url = `https://artistasapi.herokuapp.com/updateGrupo/${doc.id}`;
    return this.http.post(url, doc);
  }

  updateMiembro(doc: any) {
    const url = `https://artistasapi.herokuapp.com/updateMiembro${doc.grupo}&${doc.nombre}`;
    return this.http.post(url, doc);
  }

  updateCancion(doc: any) {
    const url = `https://artistasapi.herokuapp.com/updateCancion${doc.grupo}&${doc.nombre}`;
    return this.http.post(url, doc);
  }

  deleteGrupo(id: string) {
    const url = `https://artistasapi.herokuapp.com/deleteGrupo/${id}`;
    return this.http.get(url);
  }

  deleteMiembro(miembro: Miembro) {
    const url = `https://artistasapi.herokuapp.com/deleteMiembro/${miembro.grupo}&${miembro.nombre}`;
    return this.http.get(url);
  }

  deleteCancion(cancion: Cancion) {
    const url = `https://artistasapi.herokuapp.com/deleteCancion/${cancion.grupo}&${cancion.nombre}`;
    return this.http.get(url);
  }

  getDuraciones() {
    const url = `https://artistasapi.herokuapp.com/getDuraciones`;
    return this.http.get(url);
  }

  getFechaS() {
    const url = `https://artistasapi.herokuapp.com/getFechaS`;
    return this.http.get(url);
  }

  getEdades() {
    const url = `https://artistasapi.herokuapp.com/getEdades`;
    return this.http.get(url);
  }
}