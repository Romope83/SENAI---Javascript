const prompt = require('prompt-sync')();

let operacao =  prompt("Escolha uma operação matemática(*,/,+,-): ");
let num01 = "";
let num02 = "";

switch(operacao){
    case "*":
        capturarPrompt();            
        console.log(`A multiplicação dos números ${num01} e ${num02} é: ${num01*num02} `);
        break;
    case "/":
        capturarPrompt();            
        console.log(`A divisão dos números ${num01} e ${num02} é:  ${num01==0 ? "--NÃO EXISTE DIVISÃO POR ZERO--": num01/num02} `);
        break;
    case "+":
        capturarPrompt();            
        console.log(`A soma dos números ${num01} e ${num02} é:  ${num01+num02} `);
        break;
    case "-":
        capturarPrompt();            
        console.log(`A subtração dos números ${num01} e ${num02} é:  ${num01-num02} `);
        break;
    default:
        console.log("Operação inválida!");
}


function capturarPrompt(){
    num01 = parseFloat(prompt("Informe o primeiro número: "));
    num02 = parseFloat(prompt("Informe o segundo número: "));
}