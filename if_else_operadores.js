//Exercicio 03
console.log('Ola mundo');


//Exercicio 04
//importando a biblioteca prompt
let prompt = require("prompt-sync")();

// 1o passo: coletar as informações do usuário:
let nome = prompt("Digite seu nome:");
let horario = prompt("É manha, tarde ou noite?");

//passo 2 - use o if e imprima "Bom dia, <nome>" ou "Boa tarde, <nome>"
if (horario == "manha") 
    console.log("Bom dia, " + nome);

else if(horario == "tarde")
    console.log("Boa tarde, " + nome);

else if(horario == "noite")
    console.log("Boa noite, " + nome);

else 
    console.log("OPÇÃO INVALIDA!!");




 

//passo 2 - use o if e imprima "Bom dia, <nome>" ou "Boa tarde, <nome>"
//agora vou fazer mudando a lógica:
//nesta versão (exercicio), utilize o operador logico OU para checar se a entrada é valida no inicio do programa

if (horario == "manha"  || horario == "tarde" || horario == "noite")
{
    if(horario == "manha") {console.log (`Bom dia, ${nome}`)}   //usando template literals
    
    if(horario == "tarde") {console.log (`Boa tarde, ${nome}`)} //p/ melhor organização
    
    if(horario == "noite") {console.log (`Boa noite, ${nome}`)} 
}
else {console.log("OPÇÃO INVÁLIDA!!")}
