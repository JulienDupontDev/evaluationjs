'use strict';

/**
 * Charge au chargement de la page
 */
window.onload = function(){
    generateField();
}

/** Genere la bataille navale et les bateaux
*
* 
*/
function generateField(){
    var matrix = [
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
        [0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]

    var ships = [
        {
            id:4,
            type: "Porte avion",
            size:5
        },
        {
            id:5,
            type: "Porte avion",
            size:5
        },
        {
            id:3,
            type: "Croiseur",
            size:5
        },
        {
            id:4,
            type: "Frégate",
            size:3
        },
        {
            id:1,
            type: "Chaloupe",
            size:2
        }
    ];

    var grid = document.createElement("table");
    grid.style.border = "2px solid blue";

    for(var y=0;y<matrix.length;y++){
        var tr = document.createElement("tr");
        for(var x=0;x<matrix[y].length;x++){
            var td=  document.createElement("td");
            td.style.width = "10px";
            td.innerHTML = "O";
            td.addEventListener("click", function(event){
                handleClick(event, ships);
            })
            if(matrix[y][x] != 0){
                td.setAttribute("ship", matrix[y][x]);
            }
            tr.appendChild(td);
        }
        grid.appendChild(tr);
    }

    document.querySelector("body").appendChild(grid);

    ships.forEach(function(ship){
        document.querySelector("body").insertAdjacentHTML("beforeend", "<span id=ship"+ship.id+">"+ship.type + "</span>")
    })
}

/** Gere le click sur une cellule
 * 
 * @param {event} event 
 */
function handleClick(event, ships){
    var target = event.target;
    if(target.getAttribute("ship") != null){
        target.style.backgroundColor = "red";
        target.innerHTML = "X";
        shootShip(target.id, ships);
        return;
    }

    target.style.backgroundColor = "blue";
    target.innerHTML = "";
}

/**
 * Shoot 
 * @param {int} shipId
 * @param {Object[]} array of ships 
 */
function shootShip(id, ships){
    ships.forEach(function(ship) {
        console.log(ship.id + " " + id)
        if(ship.id == id){
            if(ship.size - 1 == 0){
                ship.size = 0;
                document.querySelector("#ship" + ship.id).style.textDecorationLine = "line-through";
            }
        }
    });
}