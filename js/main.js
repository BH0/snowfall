alert("Loaded main");

var template_url = snowfall_custom.template_url;
var xhr = new XMLHttpRequest();
xhr.open("GET", snowfall_custom.plugin_url + "options.json", true);

var width, fallSpeed, rate;
var data;

var variation;
xhr.onload = function() {
    if (this.status == 200) {
        console.log("AJAX Request sent: " + this.status);
        data = JSON.parse(this.response);
        alert(data); 
    } else {
        console.log("AJAX FAILED", this.status);
    }
    return data;
}
xhr.send();
alert(data.width);
