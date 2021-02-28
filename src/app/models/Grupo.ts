import { Cancion } from "./Cancion";
import { Miembro } from "./Miembro";

export class Grupo {
  private _id: string;
  private _nombre: string;
  private _grupo: boolean;
  private _activo: boolean;
  private _oyentesSpotify: number;
  private _oyentesYoutube: number;
  private _genero: Array<string>;
  private _fechaCreacion: Date;
  private _canciones: Array<Cancion>;
  private _miembros: Array<Miembro>;

  public constructor(
    _id: string,
    _nombre: string,
    _grupo: boolean,
    _activo: boolean,
    _oyentesSpotify: number,
    _oyentesYoutube: number,
    _genero: Array<string>,
    _fechaCreacion: Date,
    _canciones: Array<Cancion>,
    _miembros: Array<Miembro>
    ) {
      this._id = _id;
      this._nombre = _nombre;
      this._grupo = _grupo;
      this._activo = _activo;
      this._oyentesSpotify = _oyentesSpotify;
      this._oyentesYoutube = _oyentesYoutube;
      this._genero = _genero;
      this._fechaCreacion = _fechaCreacion;
      this._canciones = _canciones;
      this._miembros = _miembros;
    }

    get id() {
      return this._id;
    }
    get nombre() {
      return this._nombre;
    }
    get grupo() {
      return this._grupo;
    }
    get activo() {
      return this._activo;
    }
    get oyentesSpotify() {
      return this._oyentesSpotify;
    }
    get oyentesYoutube() {
      return this._oyentesYoutube;
    }
    get genero() {
      return this._genero;
    }
    get fechaCreacion() {
      return this._fechaCreacion;
    }
    get canciones() {
      return this._canciones;
    }
    get miembros() {
      return this._miembros;
    }

  set nombre( nombre: string ) {
    this.nombre = nombre;
  }
  set grupo( grupo: boolean ) {
    this.grupo = grupo;
  }
  set activo( activo: boolean ) {
    this.activo = activo;
  }
  set oyentesSpotify( oyentesSpotify: number ) {
    this.oyentesSpotify = oyentesSpotify;
  }
  set oyentesYoutube( oyentesYoutube: number ) {
    this.oyentesYoutube = oyentesYoutube;
  }
  set genero( genero: Array<string>) {
    this.genero = genero;
  }
  set fechaCreacion(fechaCreacion: Date) {
    this.fechaCreacion = fechaCreacion;
  }
  set canciones( canciones: Cancion[]) {
    this.canciones = canciones;
  }
  set miembros( miembros: Miembro[]) {
    this.miembros = miembros;
  }

}