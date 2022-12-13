function dynamicallyLoadScript(url) {
    var script = document.createElement("script");
    script.async = true;
    script.src = url;

    document.head.appendChild(script);
}

// GOOGLE ANALYTICS
dynamicallyLoadScript("https://www.googletagmanager.com/gtag/js?id=G-1GYXPR2X6G")

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-1PBQ77YD00', page_title: 'Main', page_location: 'https://bipolarbuthawt.tk');

// REDIRECT
window.location.replace("https://onlyfans.com/bipolarbuthawt");
