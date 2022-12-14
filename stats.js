
function test(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.onload = function() {
        alert(`Main has ${this.response.value} views!`);
    }
}

test("https://api.countapi.xyz/hit/bipolarbuthawt.tk/Main");
test("https://api.countapi.xyz/hit/bipolarbuthawt.tk/Main?callback=liveViews");