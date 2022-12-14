function dynamicallyLoadScript(url) {
    var script = document.createElement("script");
    script.async = true;
    script.src = url;

    document.head.appendChild(script);
}

function updateViews(response) {
    var p = document.createElement("p");
    p.innerText = response.value;
    document.body.appendChild(p);
}

// Counter API
dynamicallyLoadScript("https://api.countapi.xyz/hit/bipolarbuthawt.tk/?callback=updateViews");

// Redirect
// window.location.replace("https://onlyfans.com/bipolarbuthawt");
