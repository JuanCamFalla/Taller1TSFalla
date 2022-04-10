import { series } from "./data.js";
import { Serie } from "./serie.js"

let seriesTable: HTMLElement = document.getElementById("series")!;
mostrarDatosSeries(series);


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