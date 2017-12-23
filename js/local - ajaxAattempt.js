
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

new Tether({
  element: '#snowArea',
  target: 'body',
  attachment: 'top left',
  targetAttachment: 'top left'
});

var template_url = snowfall_custom.template_url;
var xhr = new XMLHttpRequest();

var width, fallSpeed, rate;
var data;
// note: may need some syntac correcting

xhr.open("GET", snowfall_custom.plugin_url + "options.json", true);
xhr.onload = function() {
    if (this.status == 200) {
        console.log("AJAX Request sent: " + this.status);
        data = JSON.parse(this.response);
        // return data;

        function Snow(data) {
            alert(data);
            alert(data.width)
            this.spawn = function() {
                this.x = 1 + Math.random() * pageWidth; // length from JSON file
                this.y = 10;
            }
            this.spawn();

            this.speed = 1 + Math.random() * 2;
            this.fall = function() {
                this.y += this.speed; // fallSpeed from JSON file
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
        function createSnow() {
            for (var s = 0; s < 100; s++) { // 100 ===> Volume of snow
                snow.push(new Snow());
            }
        }
        createSnow();
    } else {
        console.log("Ajax failed");
    }

}
xhr.send();

/*
function Snow() {

    this.spawn = function() {
        this.x = 1 + Math.random() * pageWidth; // length from JSON file
        this.y = 10;
    }
    this.spawn();

    this.speed = 1 + Math.random() * 2;
    this.fall = function() {
        this.y += this.speed; // fallSpeed from JSON file
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
function createSnow() {
    for (var s = 0; s < 100; s++) { // 100 ===> Volume of snow
        snow.push(new Snow());
    }
}
createSnow();
*/

/*

/*
Tasls:
* Use Tether to make the canvas stay in top left corner of page - done
* Make JSON file which user can use to define the plugin's behavior-
* (Ensure) This file can get JSON file's data and act accordingly
* -
* Make form whcih will make post request to JSON file to allow for the end-user
    to define the plugin's behavior directly within the web-page
* Ensure form doesn't interrupt user experience (too badly)

*/
/*
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

new Tether({
  element: '#snowArea',
  target: 'body',
  attachment: 'top left',
  targetAttachment: 'top left'
});


var template_url = snowfall_custom.template_url;
var xhr = new XMLHttpRequest();
xhr.open("GET", snowfall_custom.plugin_url + "options.json", true);

var width, fallSpeed, rate;
var data;

xhr.onload = function() {
    if (this.status == 200) {
        console.log("AJAX Request sent: " + this.status);
        //data = JSON.parse(this.responseText);
        data = JSON.parse(this.response);
        width = Number(data.width);
        console.log("J - width: " + Number(data.width));
        fallSpeed = data.fallSpeed;
        rate = data.rate;
        console.log(" Onload - OK " + " L/W: " + width + " Fs: " + fallSpeed + " R: " + rate);
    } else {
        console.log("Ajax failed");
    }
    console.log(" Onload " + " L/W: " + width + " Fs: " + fallSpeed + " R: " + rate);
    return data;
}
xhr.send();
alert(data); // displays "undefined"

function Snow() {

    this.spawn = function() {
        this.x = 1 + Math.random() * pageWidth; // length from JSON file
        this.y = 10;
    }
    this.spawn();

    this.speed = 1 + Math.random() * 2;
    this.fall = function() {
        this.y += this.speed; // fallSpeed from JSON file
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
function createSnow() {
    for (var s = 0; s < 100; s++) { // 100 ===> Volume of snow
        snow.push(new Snow());
    }
}

createSnow();
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var s = 0; s < snow.length; s++) {
        snow[s].fall();
        if (snow[s].y >= canvas.height) {
            snow[s].spawn();
        }
        snow[s].draw();
    }
}
setInterval(update, 30); // 30 ===> snowfall-rate
console.log(" Global " + " L/W: " + width + " Fs: " + fallSpeed + " R: " + rate);

/*

var canvas = document.getElementById("snowArea");
var ctx = canvas.getContext("2d");
ctx.fillText("HI", 10, 10);
ctx.fillRect(100, 100, 10, 10);

console.log(canvas.height);

var wid = window,
doc = document,
element = doc.documentElement,
docBody = doc.getElementsByTagName('body')[0],
pageWidth = wid.innerWidth || element.clientWidth || doc.clientWidth,
pageHeight = wid.innerHeight || element.clientHeight || doc.clientHeight;


canvas.width = pageWidth;
canvas.height = pageHeight;

canvas.style.cssText = "border: 10px solid black";
/// Tether csnvsd to top left of the page

function Snow() {

    this.spawn = function() {
        this.x = 1 + Math.random() * pageWidth;
        this.y = 10;
    }
    this.spawn();

    this.speed = 1 + Math.random() * 2;
    this.fall = function() {
        this.y += this.speed;
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
function createSnow() {
    for (var s = 0; s < 100; s++) {
        snow.push(new Snow());
    }
}

createSnow();
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var s = 0; s < snow.length; s++) {
        snow[s].fall();
        if (snow[s].y >= canvas.height) {
            snow[s].spawn();
        }
        snow[s].draw();
    }
}
setInterval(update, 30);
*/

/*

var template_url = snowfall_custom.template_url;
//var xhr = new XMLHttpRequest();
//xhr.open("GET", snowfall_custom.plugin_url + "options.json", true);

var area = document.getElementById("snowArea");

canvas = document.createElement("canvas");
canvas.appendChild(area);
var wid = window,
doc = document,
element = doc.documentElement,
docBody = doc.getElementsByTagName('body')[0],
pageWidth = wid.innerWidth || element.clientWidth || doc.clientWidth,
pageHeight = wid.innerHeight || element.clientHeight || doc.clientHeight;


canvas.width = pageWidth;
canvas.height = pageHeight;

alert(" W: " + canvas.width + " H: " + canvas.height);

canvas.style.cssText = "border: 20px solid black;background-color:purple;";
var ctx = canvas.getContext("2d");
ctx.fillStyle = "orange";
ctx.fillText("Canvas here", 100, 100);
*/
