export class Cancion {
    private _id: string;
    private _nombre: string;
    private _duracion: number;
    private _grupo: string;
    private _album: string;
    private _spotify: number;
    private _youtube: number;
    private _fechaSalida: Date;
    private _top50: boolean;
  
    constructor(
        _id: string,
        _nombre: string,
        _duracion: number,
        _grupo: string,
        _album: string,
        _spotify: number,
        _youtube: number,
        _fechaSalida: Date,
        _top50: boolean
    ) {
      this._id = _id;
      this._nombre = _nombre;
      this._duracion = _duracion;
      this._grupo = _grupo;
      this._album = _album;
      this._spotify = _spotify;
      this._youtube = _youtube;
      this._fechaSalida = _fechaSalida;
      this._top50 = _top50;
    }

    get id() {
      return this._id
    }
    get nombre() {
      return this._nombre;
    }
    get duracion() {
      return this._duracion;
    }
    get grupo() {
      return this._grupo;
    }
    get album() {
      return this._album;
    }
    get spotify() {
      return this._spotify;
    }
    get youtube() {
      return this._youtube;
    }
    get fechaSalida() {
      return this._fechaSalida;
    }
    get top50() {
      return this._top50;
    }
  }