const titulo = document.getElementById("titulo");
titulo.innerText = "DOM em Ação!";


const lista = document.querySelector("ul");
const novoItem = document.createElement("li");
novoItem.innerText = "Item 3";
lista.appendChild(novoItem);

const banana = document.createElement("li");
banana.innerText = "Ronaldo";
lista.appendChild(banana);