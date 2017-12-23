
/// Create + Control Form
//function createForm() {
    /*
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);

    var element = document.getElementById("div1");
    element.appendChild(para);
    */
    /*
    var form = document.createElement("form");
    var input = document.createElement("input");
    input.appendChild(form);
    document.getElementById("snowArea").appendChild(form);
    //document.body.appendChild(form);
    */
//}

var form = document.createElement("form");
//form.setAttribute('method',"post");
//form.setAttribute('action',"submit.php");

var inputField1 = document.createElement("input"); //input element, text
inputField1.setAttribute('type',"text");
inputField1.setAttribute('name',"value1");

/*
// might not need this (submit button):
var inputField2 = document.createElement("input"); //input element, Submit button
inputField2.setAttribute('type',"submit");
inputField2.setAttribute('value',"Submit");
*/

form.appendChild(inputField1);
//form.appendChild(inputField2);

form.id = "form1";

//document.getElementsByTagName('body')[0].appendChild(form);
document.getElementById("snowArea").appendChild(form);

//var value1 = document.forms["form1"]["value1"].value;

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
    */
}

function callCreatSnow() {
    var value1 = document.forms["form1"]["value1"].value;
    var thisWidth = 500;
    var thisFallSpeed = Number(value1);
    console.log(thisFallSpeed);
    createSnow(thisWidth, thisFallSpeed);
}
setInterval(callCreatSnow, rate);
