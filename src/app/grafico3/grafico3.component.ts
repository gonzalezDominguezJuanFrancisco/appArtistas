import { Component, OnInit } from "@angular/core";
import { GrupoService } from "../grupo.service";
import * as Highcharts from "highcharts";
import { Grupo } from "../models/Grupo";
import { Miembro } from "../models/Miembro";
import { Cancion } from "../models/Cancion";

@Component({
    selector: "app-grafico3",
    templateUrl: "./grafico3.component.html",
    styleUrls: ["./grafico3.component.css"]
})

export class Grafico3Component implements OnInit {
    Highcharts: typeof Highcharts = Highcharts;
    grupos: Array<Grupo> = [];
    gruposApi = null;
    grupoTmp: any;

    chartOptions: Highcharts.Options = {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: ''
        },

        xAxis: {
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            title: {
                text: 'Edad mínima'
            }
        },

        yAxis: {
            title: {
                text: 'Edad máxima'
            }
        },

        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb()'
                        }
                    }
                },

                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} cm, {point.y} kg'
                }
            }
        },
        series: [{
            type: 'scatter',
            color: 'rgba(223, 83, 83, .5)',
            name: '',
            data: []
        }]
    }
    

    ngOnInit() {
        this.getDatos();
    }

    constructor(private grupoService: GrupoService) {}

    getDatos() {
        this.grupoService.getEdades()
        .subscribe(
            result => {
                let dato: any = result;
                this.chartOptions.series = dato
                console.log(dato)
                Highcharts.chart("grafico3", this.chartOptions);
            }
        )
    }
};