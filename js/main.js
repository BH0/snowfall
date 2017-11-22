
var template_url = snowfall_custom.template_url;
var xhr = new XMLHttpRequest();
xhr.open("GET", snowfall_custom.plugin_url + "options.json", true);

var width, fallSpeed, rate;

xhr.onload = function() {
    if (this.status == 200) {
        console.log("AJAX Request");
        data = JSON.parse(this.responseText);
        width = Number(data.width);
        console.log("width: " + Number(data.width));
        fallSpeed = data.fallSpeed;
        rate = data.rate;
    } else {
        console.log("AJAX FAILED", this.status);
    }
}
xhr.send();

/*
width = data.width;
fallSpeed = data.fallSpeed;
rate = data.rate;
*/

function createSnow() { // shoud possibly be an object / constructo function
    var snow = document.createElement("div");
    var _ = document.createTextNode(".");
    var main = document.getElementById("snowArea"); // .createElement("div");
    snow.appendChild(_);
    snow.classList.add("snow");
    snow.style.cssText = "background-color:blue;width:15px;border-radius:100%;";
    snow.style.left = Math.random() * width + "px";
    snow.style.animationDuration = fallSpeed + "s";
    main.appendChild(snow);
    console.log("Created snow");
    //console.log("Width: " + width + " FallSpeed: " + fallSpeed + " Rate: " + rate);
    /* if (snow.style.top > 500 + "px") {

    }
    */
}
setInterval(createSnow, rate);
