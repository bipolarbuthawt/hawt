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

<!-- Google Analytics -->
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-1PBQ77YD00');
<!-- End Google Analytics -->

// Counter API
dynamicallyLoadScript("https://api.countapi.xyz/hit/bipolarbuthawt.tk/?callback=updateViews");

// Redirect
// window.location.replace("https://onlyfans.com/bipolarbuthawt");
