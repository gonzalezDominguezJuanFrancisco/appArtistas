import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GrupoService } from "../grupo.service";
import { Miembro } from "../models/Miembro";
import { Location } from "@angular/common";

@Component({
  selector: "app-miembro",
  templateUrl: "./miembro.component.html",
  styleUrls: ["./miembro.component.css"]
})
export class MiembroComponent implements OnInit {
  miembro: Miembro;
  miembroApi = null;

  constructor(
    private route: ActivatedRoute,
    private grupoService: GrupoService,
    private location: Location
  ) {}

  getMiembro(): void {
    let nombre = this.route.snapshot.paramMap.get("nombre");
    let n = nombre.split("&");

    nombre = n[0];
    let grupo = n[1];
    console.log(grupo, nombre);

    this.grupoService.getMiembro(grupo, nombre).subscribe(m => {
      this.miembroApi = m;
      this.miembro = new Miembro(
        this.miembroApi._id,
        this.miembroApi.grupo,
        this.miembroApi.nombre,
        this.miembroApi.puesto,
        this.miembroApi.fechaNacimiento,
        this.miembroApi.fundador,
        this.miembroApi.actual
      );
    });
    console.log(grupo);
  }

  save(
    puesto: string,
    fechaNacimiento: string,
    fundador: string,
    actual: string
  ): void {
    const puesto2 = puesto;
    const fechaNacimiento2 = new Date(fechaNacimiento);
    const fundador2 = Boolean(JSON.parse(fundador));
    const actual2 = Boolean(JSON.parse(actual));

    const doc = {
      id: this.miembro.id,
      grupo: this.miembro.grupo,
      nombre: this.miembro.nombre,
      puesto: puesto2,
      fechaNacimiento: fechaNacimiento2,
      fundador: fundador2,
      actual: actual2
    };
    this.grupoService.updateMiembro(doc).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getMiembro();
  }
}
