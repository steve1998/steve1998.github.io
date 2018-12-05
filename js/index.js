'use strict';
var active = false;

function setActive(x) {
    if (active == false) {
        x.classList.add("is-active");
        document.getElementById("mymenu").style.visibility = "visible";
        document.getElementById("body").classList.add("overlay");
        document.getElementById("burg").classList.add("overlay-max");
        active = true;
    }
    else {
        x.classList.remove("is-active");
        document.getElementById("mymenu").style.visibility = "collapse";
        document.getElementById("body").classList.remove("overlay");
        document.getElementById("burg").classList.remove("overlay-max");
        active = false;
    }
}
