'use strict';

/**
 * Charge au chargement de la page
 */
window.onload = function(){
    var input = document.createElement("input");
    var submit = document.createElement("button");
    input.placeholder = "phone number";
    submit.innerHTML = "check";
    submit.addEventListener("click",checkPhoneNumber);
    document.querySelector("body").append(input,submit);
}

/** verifie numero telephone
*
* @returns {boolean}
*/
function checkPhoneNumber(){
    console.log("coucou")
    var regex = new RegExp(/^(01|02|03|04|05|06|08)[0-9]{8}/gi);
    var input = document.querySelector("input");
    if(!regex.test(input.value)){
        alert("Erreur de format");
        return;
    }
    alert("Ok");
    input.value = "";

}
