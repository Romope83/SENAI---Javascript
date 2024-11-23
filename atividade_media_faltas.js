const prompt = require('prompt-sync')();

let nome = prompt("Informe o nome do aluno: ");
let nota01 = parseFloat(prompt("Informe a primeira nota: "));
let nota02 = parseFloat(prompt("Informe a segunda nota: "));
let nota03 = parseFloat(prompt("Informe a terceira nota: "));
let porcFaltas = parseFloat(prompt("Informe a porcentagem de faltas: "));

console.log(`O aluno ${nome} está ${definirStatus(nota01,nota02,nota03,porcFaltas)}`);



function definirStatus(nota01,nota02,nota03,porcFaltas){

    let notaMedia = (nota01 + nota02 + nota03)/3; 

    if(notaMedia >= 7 && porcFaltas < 25)
        return  "Aprovado!";
    if(notaMedia< 7 && porcFaltas < 25)
        return "de Recuperação!";
    if(notaMedia < 5 || porcFaltas>=25)
        return "Reprovado";

    return " --- Dados inválidos";
}
