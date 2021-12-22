

import {add} from "./calc";
import ("./index.css")
import img1 from "./react.jpg";
const gaura = document.getElementById("gaurav");
const image = document.createElement("img");
image.src = img1;
gaura.append(image);
const root = document.getElementById("root");


const label = document.createElement("label");
label.innerHTML = "Name";
const input = document.createElement("input");
input.setAttribute("id","item");
const but = document.createElement("button")
but.innerText="add"
const btc =document.createElement("button");
btc.innerText="search"
but.addEventListener("click",()=>{
  console.log("gaurav")
  
    additem();
})
btc.addEventListener("click",()=>{
    search();
})

        
var p = [];    
root.append(label,input,but,btc);

function additem() {
    var name = document.getElementById("item");
    var nd = document.createElement('div');
    nd.textContent = name.value;
    p.push(nd.textContent);
    var parent = document.getElementById("iteams");
    parent.appendChild(nd);
    name.value = "";

}


function search() {
    var name = document.getElementById("item").value;

    for (var i = 0; i < p.length; i++) {
        var index = -1;
        if (p[i] == name) {
            index = i;
            break;
        }
    }
    var parent = document.getElementById("iteams");
    var childrean = parent.querySelectorAll("div");
    for (var j = 0; j < childrean.length; j++) {
        childrean[j].remove();
    }
    if (index >= 0) {
        var n = document.createElement("div");
        n.textContent = p[index];
        parent.appendChild(n);

    }



}






// const h1 = document.createElement("h1")
// const imking = document.createElement("img");
// imking.src=img1;
// h1.innerText = "hello webpack";
// h1.classList.add("redcolor");
// document.getElementById("root").appendChild(h1);
// document.getElementById("root").append(imking)
 