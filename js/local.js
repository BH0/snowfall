/* TASKS (unordered)
* Commit this version of the project to a new Git branch
* Clean up + refactor code
* Ensure the elements are created as arrays so that they can easily be added + removed so that the plugin doesn't approve the website's performance
* Ensure the button becomes transperent when not form isn't in use
* Ensure the form becomes invisible / visible via the click of the button
* Ensure the form + button doesn't get in the way of the user's experience (too much)
*
*/

//
var form = document.createElement("form");
form.id = "getFormValuesForSnowfallPlugin";

var inputWidth = document.createElement("input"); //input element, text
inputWidth.setAttribute('type',"text");
inputWidth.setAttribute('name',"width");
form.appendChild(inputWidth);

var inputFallSpeed = document.createElement("input"); //input element, text
inputFallSpeed.setAttribute('type',"text");
inputFallSpeed.setAttribute('name',"fallSpeed");
form.appendChild(inputFallSpeed);

var inputRate = document.createElement("input"); //input element, text
inputRate.setAttribute('type',"text");
inputRate.setAttribute('name',"rate");
form.appendChild(inputRate);

var toggleButton = document.createElement("div");
var toggleButtonText = document.createTextNode("Toggle Snowfall Options");
toggleButton.appendChild(toggleButtonText);
toggleButton.id = "toggleSfPlugin";
toggleButton.style.cssText = "background-color:purple;";
toggleButton.addEventListener("click", toggleButtonFunc);
//form.appendChild(toggleButton); // unsure if I want the button to be connected to the form

var buttonHidden = false;
function toggleButtonFunc(e) {
    buttonHidden = !buttonHidden;
    console.log(buttonHidden);
    if (e.target.id == "toggleSfPlugin" && buttonHidden == true) { // false
    // if (e.target.id == "toggleSfPlugin" && buttonHidden == !buttonHidden) {
        alert("Hiding");
        var sfForm = document.getElementById("getFormValuesForSnowfallPlugin");
        sfForm.style.cssText = "visibillity:hidden;display:none;";
        buttonHidden = false; // true
    } /* else if (e.target.id == "toggleSfPlugin" && buttonHidden == false) { // true
    // } else if (e.target.id == "toggleSfPlugin" && buttonHidden == !buttonHidden) {
        alert("Showing")
        var sfForm = document.getElementById("getFormValuesForSnowfallPlugin");
        sfForm.style.cssText = "visibillity:visible;display:initial;";
        buttonHidden = true; // false
    } */
}

// the following event listener is for testing:
document.addEventListener("keydown", function(e) {
    if (e.keyCode == 38) { // up arrow key
        alert("Showing");
        var sfForm = document.getElementById("getFormValuesForSnowfallPlugin");
        sfForm.style.cssText = "visibillity:visible;display:initial;";
        buttonHidden = true; // false
    }
});

/*
var buttonHidden = false;
function toggleButtonFunc(e) {
    buttonHidden = !buttonHidden;
    console.log(buttonHidden);
    if (e.target.id == "toggleSfPlugin" && buttonHidden == false) {
        buttonHidden = true;
        alert("CLICKED");
        var sfForm = document.getElementById("getFormValuesForSnowfallPlugin");
        // hide form
        sfForm.style.cssText = "visibillity:hidden;display:none;";
        // alter button transparency
        /*
        toggleButton.style.cssText = "opacity:0.7";
        *
    } else {
        var sfForm = document.getElementById("getFormValuesForSnowfallPlugin");
        // hide form
        sfForm.style.cssText = "visibillity:visible;display:initial;";
        buttonHidden = false;
    }
}
*/

form.appendChild(toggleButton);


document.getElementById("snowArea").appendChild(form);
document.getElementById("snowArea").appendChild(form);


/// Create + Control Snow
var width, fallSpeed, rate;
var data = "";

function createSnow(width, fallSpeed) { // shoud possibly be an object / constructo function
    var width = width;
    var fallSpeed = fallSpeed;

    var snow = document.createElement("div");
    var _ = document.createTextNode(".");
    var main = document.getElementById("snowArea"); // .createElement("div");
    snow.appendChild(_);
    snow.classList.add("snow");
    snow.style.cssText = "background-color:white;width:15px;border-radius:100%;";
    snow.style.left = Math.random() * width + "px";
    snow.style.animationDuration = fallSpeed + "s";
    main.appendChild(snow);
    /* if (snow.style.top > 500 + "px") {

    }
    */
}

function callCreatSnow() {
    var thisWidth = Number(document.forms["getFormValuesForSnowfallPlugin"]["width"].value);
    var thisFallSpeed = Number(document.forms["getFormValuesForSnowfallPlugin"]["fallSpeed"].value);
    createSnow(thisWidth, thisFallSpeed);
}
var thisRate = Number(document.forms["getFormValuesForSnowfallPlugin"]["rate"].value);
setInterval(callCreatSnow, thisRate);

/*
var form = document.createElement("form");

var inputWidth = document.createElement("input"); //input element, text
inputWidth.setAttribute('type',"text");
inputWidth.setAttribute('name',"width");
form.appendChild(inputWidth);

var inputFallSpeed = document.createElement("input"); //input element, text
inputFallSpeed.setAttribute('type',"text");
inputFallSpeed.setAttribute('name',"fallSpeed");
form.appendChild(inputFallSpeed);

var inputRate = document.createElement("input"); //input element, text
inputRate.setAttribute('type',"text");
inputRate.setAttribute('name',"rate");
form.appendChild(inputRate);

form.id = "getFormValuesForSnowfallPlugin";

document.getElementById("snowArea").appendChild(form);

/// Create + Control Snow
var width, fallSpeed, rate;
var data = "";

function createSnow(width, fallSpeed) { // shoud possibly be an object / constructo function
    var width = width;
    var fallSpeed = fallSpeed;

    var snow = document.createElement("div");
    var _ = document.createTextNode(".");
    var main = document.getElementById("snowArea"); // .createElement("div");
    snow.appendChild(_);
    snow.classList.add("snow");
    snow.style.cssText = "background-color:green;width:15px;border-radius:100%;";
    snow.style.left = Math.random() * width + "px";
    snow.style.animationDuration = fallSpeed + "s";
    main.appendChild(snow);
    /* if (snow.style.top > 500 + "px") {

    }
    *
}

function callCreatSnow() {
    var thisWidth = Number(document.forms["getFormValuesForSnowfallPlugin"]["width"].value);
    var thisFallSpeed = Number(document.forms["getFormValuesForSnowfallPlugin"]["fallSpeed"].value);
    createSnow(thisWidth, thisFallSpeed);
}
var thisRate = Number(document.forms["getFormValuesForSnowfallPlugin"]["rate"].value);
setInterval(callCreatSnow, thisRate);
*/
