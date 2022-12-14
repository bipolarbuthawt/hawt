var debugMode = true;

function dynamicallyLoadScript(url) {
    var script = document.createElement("script");
    script.async = true;
    script.src = url;

    document.head.appendChild(script);
}

function liveViews(response) {
    var test = response.value;
}

// Counter API
var title = "";
if (document.title != "Main") title = document.title;
dynamicallyLoadScript("https://api.countapi.xyz/hit/bipolarbuthawt.tk/" + title + "/views?callback=liveViews");

// Redirect
if (document.title != "stats" && debugMode != true) {
    window.location.replace("https://onlyfans.com/bipolarbuthawt");
}
