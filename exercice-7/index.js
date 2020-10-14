'use strict';

/**
 * Charge au chargement de la page
 */
window.onload = function(){
    computeNotes([1.2,2,15,10]);
}

/** Calcule la moyenne des notes
* @param {float[]}
* 
*/
function computeNotes(notes){

    if(notes.length ==0){
        alert('Nos notes in array');
        return;
    }
    var sum = 0;
    notes.forEach(function(note){
        sum += note;
    });

    alert("Average note : " + sum/notes.length);

}
