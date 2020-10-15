'use strict';

/**
 * Charges au chargement de la page
 */
window.onload = function(){
    gridGenerator(5,3);
} 

/**
 *  Genere la grille
 * @param {int} xAxis 
 * @param {int} yAxis 
 */
function gridGenerator(xAxis,yAxis){
    let table = document.createElement("table");
    for(let y=0;y<yAxis;y++){
        let tr = document.createElement("tr");
        tr.style.padding = "25px";

        for(let x=0;x<xAxis;x++){
           let td = document.createElement("td");
            td.style.width = "30px";
    td.style.height = "30px";
           setInterval(function(){
                td.style.backgroundColor = generateColor();
               tr.appendChild(td);
           }, Math.random() * (2000 - 1000) + 1000)
        }
        table.appendChild(tr);
    }
    document.querySelector('body').appendChild(table);
}

/**
 * @returns {string} random color
 */
var generateColor = function () {

    var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;

};

