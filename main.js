const debugMode = true;

function dynamicallyLoadScript(url) {
    var script = document.createElement("script");
    script.async = true;
    script.src = url;

    document.head.appendChild(script);
}

function liveViews(response) {}

// Counter API
dynamicallyLoadScript("https://api.countapi.xyz/hit/bipolarbuthawt.tk/" + document.title + "/views?callback=liveViews");

// Redirect
if (document.title != "stats" && debugMode != true) {
    window.location.replace("https://onlyfans.com/bipolarbuthawt");
}
