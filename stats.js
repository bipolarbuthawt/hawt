var namespace = "bipolarbuthawt.tk/OF";

function getValue(url, digits) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.onload = function () {
    console.log("OF" + digits + ": " + this.response.value);
  };
  xhr.send();
}

for (var i = 0; i < 10; i++) {
  var digits = ("" + i).padStart(3, "0");
  getValue("https://api.countapi.xyz/info/" + namespace + digits, digits);
}
