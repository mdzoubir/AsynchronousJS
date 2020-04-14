let myButton = document.getElementById("button");
let output = document.querySelector("p");

myButton.onclick = function() {
    output.innerHTML = new Date();

    // parte 2
    let http = new XMLHttpRequest();
    let part = document.getElementById("output");
    http.open("GET", "./data.txt");

    http.onload = function() {
            // if (http.readyState === 4 && http.status === 200) {
            part.innerHTML = http.responseText;

        }
        // }

    http.send();


}


// http.onreadystatechange = function() {
//     part.innerHTML = (http.responseText());
// }
// http.send();