import { Component, OnInit } from "@angular/core";
import { GrupoService } from "../grupo.service";
import * as Highcharts from "highcharts";
import { Grupo } from "../models/Grupo";
import { Miembro } from "../models/Miembro";
import { Cancion } from "../models/Cancion";
declare var require: any;
require("highcharts/highcharts-more")(Highcharts);
require("highcharts/modules/exporting")(Highcharts)
require("highcharts//modules/accessibility")(Highcharts)

@Component({
    selector: "app-grafico2",
    templateUrl: "./grafico2.component.html",
    styleUrls: ["./grafico2.component.css"]
})

export class Grafico2Component implements OnInit {
    Highcharts: typeof Highcharts = Highcharts;
    grupos: Array<Grupo> = [];
    gruposApi = null;
    grupoTmp: any;

    chartOptions: Highcharts.Options = {
        chart: {
            type: 'packedbubble',
            backgroundColor: null
        },

        title: {
            text: ""
        },

        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value} canciones'
        },

        plotOptions: {
            packedbubble: {
                minSize: '20%',
                maxSize: '100%',
                //zMin: 0,
                //zMax: 1000,
                layoutAlgorithm: {
                    gravitationalConstant: 0.05,
                    splitSeries: "true",
                    seriesInteraction: false,
                    dragBetweenSeries: true,
                    parentNodeLimit: true
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 250
                    },
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },

        series: [{
            type: 'packedbubble',
            name: '',
            data: [{
                    name: '',
                    value: ''
                }
            ]
        }
    ]}
    

    ngOnInit() {
        this.getDatos();
    }

    constructor(private grupoService: GrupoService) {}

    getDatos() {
        this.grupoService.getFechaS()
        .subscribe(
            result => {
                let dato: any = result;
                    this.chartOptions.series = dato
                    Highcharts.chart("grafico2", this.chartOptions);
            }
        )
    }
};