import { Component, OnInit } from "@angular/core";
import { GrupoService } from "../grupo.service";
import * as Highcharts from "highcharts";
import { Grupo } from "../models/Grupo";
import { Miembro } from "../models/Miembro";
import { Cancion } from "../models/Cancion";

@Component({
    selector: "app-grafico1",
    templateUrl: "./grafico1.component.html",
    styleUrls: ["./grafico1.component.css"]
})

export class Grafico1Component implements OnInit {
    Highcharts: typeof Highcharts = Highcharts;
    grupos: Array<Grupo> = [];
    gruposApi = null;
    grupoTmp: any;

    chartOptions: Highcharts.Options = {
        chart: {
            type: "line",
            backgroundColor: null,
          },

        title: {
            text: ""
        },

        yAxis: {
            title: {
                text: 'Duración en minutos'
            }
        },
    
        xAxis: {
            title: {
                text: 'Nº de canción'
            }
        },
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 0
            }
        },
    
        series: [{
            type: "line",
            name: '',
            data: []
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    };

    ngOnInit() {
        this.getDatos();
    }

    constructor(private grupoService: GrupoService) {}

    getDatos() {
        this.grupoService.getDuraciones()
        .subscribe(
            result => {
                let dato: any = result;
                    this.chartOptions.series = dato
                    Highcharts.chart("grafico1", this.chartOptions);
            }
        )
    }
    /*
    getDatos() {
        this.grupoService.getDuraciones()
        .subscribe(
            result => {
                let datos: any = result;
                let cont: number = 0
                for (let dato of datos) {
                    console.log(cont)
                    console.log(dato.nombre)
                    console.log(dato.duraciones)
                    let nameSeries:string = dato.nombre
                    let dataSeries:Array<any> = dato.duraciones
                    this.chartOptions.series[cont]["name"] = nameSeries
                    this.chartOptions.series[cont]["data"] = dataSeries

                    Highcharts.chart("grafico1", this.chartOptions);
                    cont++;
                }

            }
        )
    }*/
};