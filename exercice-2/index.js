'use strict';

window.onload = function () {
    let myDrawBar = new DrawBar(10, 2);
    myDrawBar.setValue(8);
    myDrawBar.display();
}

/**
 * Class Drawbar 
 * @param {int} sum 
 * @param {int} nbr 
 */
function DrawBar(sum, nbr) {
    this.progressBar = document.createElement("progress");
    this.setValue(nbr);
    this.setMaxValue(sum);
    this.display();
}

/**
 * Set the instance value 
 * @param {int} nbr 
 */
DrawBar.prototype.setValue = function (nbr) {
    this.progressBar.value = nbr;
}

/**
 * Sets the instance max value
 * @param {int} sum 
 */
DrawBar.prototype.setMaxValue = function (sum) {
    this.progressBar.max = sum;
}

/**
 * Displays the drawbar on the body 
 */
DrawBar.prototype.display = function () {
    this.progressBar.style.width = "100%";
    document.querySelector("body").appendChild(this.progressBar);
}



