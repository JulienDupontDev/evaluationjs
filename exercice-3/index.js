'use strict';

window.onload = function () {
    let morpion = new MyMorpionXO();
}

function MyMorpionXO(){
    this.playerPlaying = "X";
    this.createMorpion();
}

MyMorpionXO.prototype.createMorpion = function (){
    this.board = document.createElement("table");
    for(let y=0;y<3;y++){
        let tr = document.createElement("tr");
        for(let x=0;x<3;x++){
            let td = document.createElement("td");
            td.style.padding = "25px";
            td.style.border = "1px solid black";
            td.addEventListener('click', function(){
                td.innerHTML = this.playerPlaying;
                this.doesGameEnds();
            })
            tr.appendChild(td);
        }
        this.board.appendChild(tr);
    }
    document.querySelector("body").appendChild(this.board);

}

MyMorpionXO.prototype.nextTurn = function(){
    this.playerPlaying = this.playerPlaying == "X" ? "0" : "X";

}

MyMorpionXO.prototype.doesGameEnds = function(){
  
}






