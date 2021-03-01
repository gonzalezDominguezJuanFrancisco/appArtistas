export class Miembro {
  private _id: string;
  private _grupo: string;
  private _nombre: string;
  private _puesto: Array<string>;
  private _fechaNacimiento: Date;
  private _fundador: boolean;
  private _actual: boolean;

  constructor(
    _id: string,
    _grupo: string,
    _nombre: string,
    _puesto: Array<string>,
    _fechaNacimiento: Date,
    _fundador: boolean,
    _actual: boolean
    ) {
      this._id = _id;
      this._grupo = _grupo;
      this._nombre = _nombre;
      this._puesto = _puesto;
      this._fechaNacimiento = _fechaNacimiento;
      this._fundador = _fundador;
      this._actual = _actual;
    }

    get id() {
      return this._id;
    }
    get grupo() {
      return this._grupo;
    }
    get nombre() {
      return this._nombre;
    }
    get puesto() {
      return this._puesto;
    }
    get fechaNacimiento() {
      return this._fechaNacimiento;
    }
    get fundador() {
      return this._fundador;
    }
    get actual() {
      return this._actual;
    }
}
