'use strict';

window.onload = function () {
    renderWorldMap();
}

function renderWorldMap() {
    let countries = document.querySelectorAll("path");
    countries.forEach(function (country) {
        country.style
        country.addEventListener("mouseover", function (country) {
            document.querySelector("#legende").innerHTML = country.path[0].id;
            country.path[0].style.fill = "blue";
            console.log(country)
        })
        country.addEventListener("mouseleave", function (country) {
            if (country.path[0].style.fill !== "red")
                country.path[0].style.fill = "black";
        })
        
        country.addEventListener("click", function (country) {
            let clicked = document.querySelector(".clicked");
            if (clicked !== null) {
                console.log(clicked)
                clicked.classList.remove("clicked");
                clicked.style.fill = "black";
            }
            country.path[0].style.fill = "red";
            country.path[0].classList.add("clicked");
        })


    })
}







