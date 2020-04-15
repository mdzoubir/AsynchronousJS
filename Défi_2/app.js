const but1 = document.getElementById("button1");
const but2 = document.getElementById("button2");
const affi = document.getElementById("customer");
const affich = document.getElementById("customers");


but1.onclick = function() {
    let http = new XMLHttpRequest();
    http.open("GET", "./customer.json");
    http.onload = function() {
        if (http.readyState === 4 && http.status === 200) {
            try {
                var check = JSON.parse(http.responseText);
                affi.innerHTML = "id :" + check.id + "<br>" + "name :" + check.name + "<br>" + "company :" + check.company + "<br>" + "Phone :" + check.phone;
            } catch (e) {
                console.log("there was an error in JSON. could not parse!");
            }

        } else {
            console.log("did not receive 200 ok from responce!")
        }
    }
    http.send();
}

but2.onclick = function() {
    let http = new XMLHttpRequest();
    http.open("GET", "./customers.json");
    http.onload = function() {
        if (http.readyState === 4 && http.status === 200) {
            try {
                var check = JSON.parse(http.responseText);
                affich.innerHTML = "id :" + check[0].id + "<br>" + "name :" + check[0].name + "<br>" + "company :" + check[0].company + "<br>" + "Phone :" + check[0].phone + "<br>" + "id :" + check[1].id + "<br>" + "name :" + check[1].name + "<br>" + "company :" + check[1].company + "<br>" + "Phone :" + check[1].phone + "<br>" + check[2].id + "<br>" + "name :" + check[2].name + "<br>" + "company :" + check[2].company + "<br>" + "Phone :" + check[2].phone;
            } catch (e) {
                console.log("there was an error in JSON. could not parse!");
            }
        } else {
            console.log("did not receive 200 ok from responce!")
        }
    }
    http.send();
}