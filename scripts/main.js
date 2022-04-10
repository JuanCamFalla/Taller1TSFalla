import { series } from "./data.js";
var seriesTable = document.getElementById("series");
mostrarDatosSeries(series);
function mostrarDatosSeries(series1) {
    var seriesTBody = document.createElement("tBody");
    for (var _i = 0, series1_1 = series1; _i < series1_1.length; _i++) {
        var serie = series1_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td>").concat(serie.nombre, "</td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        seriesTBody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTBody);
}
