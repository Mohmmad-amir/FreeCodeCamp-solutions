/*
TODO: certificate name: Data Visualization
TODO: course name: Json Apis and Ajax
 */

// no.1
// name: Handle Click Events with JavaScript using the onclick property
document.getElementById('getMessage').onclick = function () { };

//no.2
//name:Change Text with click Events
document.getElementsByClassName('message')[0].textContent = "Here is the message";

//no.3
//name:Get JSON with the JavaScript XMLHttpRequest Method
const req = new XMLHttpRequest();
req.open("GET", '/json/cats.json', true);
req.send();
req.onload = function () {
    const json = JSON.parse(req.responseText);
    document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};

//no.4
//name:Get JSON with the JavaScript fetch method
fetch('/json/cats.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerHTML = JSON.stringify(data);
    })

//no.5
//name:Access the JSON Data from an API
// Add your code below this line
console.log(json[2].codeNames[1]);

// Add your code above this line

//no.6
//name:Convert JSON Data to HTML

// Add your code below this line
json.forEach(function (val) {
    var keys = Object.keys(val);
    html += "<div class = 'cat'>";
    keys.forEach(function (key) {
        html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
    });
    html += "</div><br>";
});
// Add your code above this line

//no.7
//name:Render Images from Data Sources
// Add your code below this line
html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
// Add your code above this line

//no.8
//name:Pre-filter JSON to Get the Data You Need
json = json.filter(function (val) {
    return (val.id !== 1);
});

//no.9
//name:Get Geolocation Data to Find A User's GPS Coordinates
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        document.getElementById('data').innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    });
}
//no.10
//name: Post Data with the JavaScript XMLHttpRequest Method

const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 201) {
        const serverResponse = JSON.parse(xhr.response);
        document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
    }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);