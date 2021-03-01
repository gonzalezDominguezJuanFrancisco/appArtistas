import { Component, OnInit } from "@angular/core";
import { GrupoService } from "../grupo.service";
import { Miembro } from "../models/Miembro";

@Component({
  selector: "app-miembros",
  templateUrl: "./miembros.component.html",
  styleUrls: ["./miembros.component.css"]
})

export class MiembrosComponent implements OnInit {
  miembros: Array<Miembro> = [];
  miembrosApi = null;
  miembrosTmp: any;
  constructor(private grupoService: GrupoService) {}

  getMiembros() {
    this.grupoService.getMiembros().subscribe(miembros => {
      this.miembrosApi = miembros;
      for (let miembro of this.miembrosApi) {
        let m = new Miembro(
          miembro._id,
          miembro.grupo,
          miembro.nombre,
          miembro.puesto,
          miembro.fechaNacimiento,
          miembro.fundador,
          miembro.actual
        );
        this.miembros.push(m);
      }
    });
  }

  ngOnInit() {
    this.getMiembros();
  }
}
