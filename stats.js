var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/hit/bipolarbuthawt.tk/Main/");
xhr.responseType = "json";
xhr.onload = function() {
    alert(`Main has ${this.response.value} views!`);
}