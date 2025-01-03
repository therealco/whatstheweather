var location = prompt("Enter location.")
var src = "https://www.msn.com/en-us/weather/forecast/in-" + location + "/"
var output = fetch(src)
console.log(output)