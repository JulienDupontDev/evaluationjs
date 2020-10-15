'use strict';

window.onload = function () {
    let morpion = new MyMorpionXO();
}
/**
 * Class Morpion
 * @class morpion
 */
function MyMorpionXO() {
    this.playerPlaying = "X";
    this.createMorpion();
}

/**
 * Cree le morpion et ses elements
 */
MyMorpionXO.prototype.createMorpion = function () {
    let zones = ["A", "B", "C"];
    let playerPlaying = this.playerPlaying;
    let board = this;
    this.board = document.createElement("table");

    for (let y = 1; y < 4; y++) {
        let tr = document.createElement("tr");
        for (let x = 0; x < 3; x++) {
            let td = document.createElement("td");
            td.style.padding = "25px";
            td.style.border = "1px solid black";
            td.id = zones[x] + y.toString();
            td.addEventListener('click', function () {
                board.write(td)
            })
            tr.appendChild(td);
        }
        this.board.appendChild(tr);
    }
    document.querySelector("body").appendChild(this.board);

}

/**
 * Permet de gérer le comportement lors du clic sur une case
 * @param {Object} td 
 */
MyMorpionXO.prototype.write = function (td) {
    if (td.innerText !== "") {
        alert("Case déjà cliquée");
        return;
    }
    td.innerText = this.playerPlaying;
    setTimeout(() => {
        this.nextTurn();
    }, 200);
}
/**
 * Lancer le tour suivant
 */
MyMorpionXO.prototype.nextTurn = function () {
    let gameEnds = this.doesGameEnds();
    if (!gameEnds && gameEnds != null) {
        this.playerPlaying = this.playerPlaying == "X" ? "0" : "X";
    } else {
        if (gameEnds == null) {
            alert("Personne n'a gagné");
        } else {
            alert(this.playerPlaying + " a gagné");
        }
        document.querySelectorAll("td").forEach(function (td) {
            td.innerHTML = "";
        });
    }
}
/**
 * Verifies si la partie est finie
 * @returns {boolean || null}
 */
MyMorpionXO.prototype.doesGameEnds = function () {
    let one = document.querySelector('#A1').textContent;
    let two = document.querySelector('#A2').textContent
    let three = document.querySelector('#A3').textContent;
    let four = document.querySelector('#B1').textContent;
    let five = document.querySelector('#B2').textContent;
    let six = document.querySelector('#B3').textContent;
    let seven = document.querySelector('#C1').textContent;
    let eight = document.querySelector('#C2').textContent;
    let nine = document.querySelector('#C3').textContent;
    if (one == this.playerPlaying && two == this.playerPlaying && three == this.playerPlaying
        || four === this.playerPlaying && five == this.playerPlaying && six == this.playerPlaying
        || seven == this.playerPlaying && eight == this.playerPlaying && nine == this.playerPlaying
        || one == this.playerPlaying && five == this.playerPlaying && nine == this.playerPlaying
        || three == this.playerPlaying && five == this.playerPlaying && seven == this.playerPlaying
        || one == this.playerPlaying && four == this.playerPlaying && seven == this.playerPlaying
        || two == this.playerPlaying && five == this.playerPlaying && eight == this.playerPlaying
        || three == this.playerPlaying && six == this.playerPlaying && nine == this.playerPlaying) {
        return true;
    } else {
        if (checkAllFilled()) {
            return null;
        }
        return false;
    }
    function checkAllFilled() {
        let tests = Array.from(document.querySelectorAll("td")).reduce(reducer);
        function reducer(test, td) {
            if (td.innerText == "") {
                return "";
            }
            return test + "1";
        }

        if (tests.replace("[object HTMLTableCellElement]", "").length == 8) {
            return true;
        }
    }

}






