debugMode = True;

function dynamicallyLoadScript(url) {
    var script = document.createElement("script");
    script.async = True;
    script.src = url;

    document.head.appendChild(script);
}

// Counter API
dynamicallyLoadScript("https://api.countapi.xyz/hit/bipolarbuthawt.tk/" + document.title + "/views?callback=liveViews");

// Redirect
if (document.title != "stats" && debugMode != True) {
    window.location.replace("https://onlyfans.com/bipolarbuthawt");
}
