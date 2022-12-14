var debugMode = false;
var namespace = "bipolarbuthawt.tk/" + document.title;

function dynamicallyLoadScript(url) {
    var script = document.createElement("script");
    script.async = true;
    script.src = url;

    document.head.appendChild(script);
}

function httpRequest(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.send();
}

function incrementCount() {
    httpRequest("https://api.countapi.xyz/hit/" + namespace);
}

incrementCount();

// Redirect
if (document.title != "stats" && debugMode != true) {
    window.location.replace("https://onlyfans.com/bipolarbuthawt");
}
