alert("JS");
/*
Tasls:
* Use Tether to make the canvas stay in top left corner of page - done
* Make form whcih will make post request to JSON file to allow for the end-user
    to define the plugin's behavior directly within the web-page - done
* Ensure form doesn't interrupt user experience (too badly) -
*/

var canvas = document.getElementById("snowArea");
var ctx = canvas.getContext("2d");
ctx.fillText("HI", 10, 10);
ctx.fillRect(100, 100, 10, 10);

var wid = window,
doc = document,
element = doc.documentElement,
docBody = doc.getElementsByTagName('body')[0],
pageWidth = wid.innerWidth || element.clientWidth || doc.clientWidth,
pageHeight = wid.innerHeight || element.clientHeight || doc.clientHeight;


canvas.width = pageWidth;
canvas.height = pageHeight;

canvas.style.cssText = "border: 10px solid black";

alert("Form");

var form = document.createElement("form");
//form.setAttribute("name", "sfBehavior");
form.id = "sfBehavior";

var inputWidth = document.createElement("input"); //input element, text
inputWidth.setAttribute('type',"text");
inputWidth.setAttribute('name',"width");

var inputRate = document.createElement("input"); //input element, text
inputRate.setAttribute('type',"text");
inputRate.setAttribute('name',"rate");

var inputFallSpeed = document.createElement("input"); //input element, text
inputFallSpeed.setAttribute('type',"text");
inputFallSpeed.setAttribute('name',"fallSpeed");

form.appendChild(inputWidth);
form.appendChild(inputRate);
form.appendChild(inputFallSpeed);

var formSection = document.getElementsByTagName('div')[0].appendChild(form);

new Tether({
  element: '#snowArea',
  target: 'body',
  attachment: 'top left',
  targetAttachment: 'top left'
});

var template_url = snowfall_custom.template_url;

function Snow() {
    this.width = Number(inputWidth.value);
    // var width = document.forms["sfBehavior"]["width"].value;
    //console.log(width);
    // , fallSpeed, rate;

    this.spawn = function() {
        this.x = 1 + Math.random() * pageWidth - this.width; // length from JSON file
        this.y = 10;
    }
    this.spawn();

    this.fallSpeed  = Number(inputFallSpeed.value);
    this.speed = 1 + Math.random() * this.fallSpeed;
    this.fall = function() {
        this.y += this.fallSpeed; // fallSpeed from JSON file
    }
    this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(this.x, this.y, 5, 0, 2*Math.PI);
        ctx.fill();

        ctx.arc(this.x, this.y, 5, 0, 2*Math.PI);
        ctx.stroke();
        ctx.closePath();
    }
}

var snow = [];
var rate;
function createSnow() {
    rate = Number(inputRate.value);
    for (var s = 0; s < rate; s++) { // 100 ===> Volume of snow
        snow.push(new Snow());
    }
}

// createSnow();
function update() {

    createSnow();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var s = 0; s < snow.length; s++) {
        snow[s].fall();
        snow[s].draw();
        if (snow[s].y >= canvas.height) {
            // snow[s].spawn();
            snow.splice(snow.indexOf(snow[s]), 1);
        }
    }
}
setInterval(update, 20); // 30 ===> snowfall-rate
