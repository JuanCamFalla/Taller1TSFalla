import { series } from "./data.js";
import { Serie } from "./serie.js"

let seriesTable: HTMLElement = document.getElementById("series")!;
mostrarDatosSeries(series);
mostrarPromedioTemporadas(series);

function mostrarDatosSeries(series1: Serie[]){
    let seriesTBody: HTMLElement = document.createElement("tBody");
    for(let serie of series1){
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
        <td>${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;
        seriesTBody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTBody);
}

function mostrarPromedioTemporadas(series: Serie[]){
    let seriesTBody: HTMLElement = document.createElement("tBody");
    let total_temporadas: number = 0;
    let tamano: number = 0;
    for (let serie of series){
        let temporadas: number = serie.temporadas;
        total_temporadas = total_temporadas + temporadas; 
        tamano= tamano+1;
    }
    let promedio: number = total_temporadas/tamano;
    let trElement: HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td>Promedio de temporadas: ${promedio}</td>`;
    seriesTBody.appendChild(trElement);    
    seriesTable.appendChild(seriesTBody);
}
