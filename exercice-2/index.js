'use strict';

window.onload = function () {
    let myDrawBar = new DrawBar(10, 2);
    myDrawBar.setValue(8);
    myDrawBar.display();
}

function DrawBar(sum, nbr) {
    this.progressBar = document.createElement("progress");
    this.setValue(nbr);
    this.setMaxValue(sum);
    this.display();
}

DrawBar.prototype.setValue = function (nbr) {
    this.progressBar.value = nbr;
}

DrawBar.prototype.setMaxValue = function (sum) {
    this.progressBar.max = sum;
}

DrawBar.prototype.display = function () {
    this.progressBar.style.width = "100%";
    document.querySelector("body").appendChild(this.progressBar);
}



