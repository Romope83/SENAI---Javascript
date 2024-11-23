//Import da função prompt;
const prompt = require('prompt-sync')();

//Declaração e atribuição das variáveis iniciais
let nome = ""; 
let nota01 =""; 
let nota02 =""; 
let nota03 =""; 
let porcFaltas =""; 


//Pega os valores e se não forem válidos emite uma mensagem e tenta capturar de novo em um loop
do {
    capturarValores();
    if(!valoresValidos())
        console.log("Dados inválidos! Tente novamente...");
} 
while (!valoresValidos())

// Imprimi uma resposta na tela
console.log(`O aluno ${nome} está ${definirStatus(nota01,nota02,nota03,porcFaltas)}`);



//Apenas captura os valores do prompt
function capturarValores()
{
    nome =  prompt("Informe o nome do aluno: ");
    nota01 = parseFloat(prompt("Informe a primeira nota: "));
    nota02 = parseFloat(prompt("Informe a segunda nota: "));
    nota03 = parseFloat(prompt("Informe a terceira nota: "));
    porcFaltas = parseFloat(prompt("Informe a porcentagem de faltas: "));
}


//Verifica se os valores são válidos para seguir o processamento
function valoresValidos()
{    
    if(nome=="" || nota01 == "" || nota02 =="" || nota03 == "" || porcFaltas == "")
        return false;
    return true;
}


//Função para definir com base nas informações se está aprovado, de recuperação ou reprovado
function definirStatus(nota01,nota02,nota03,porcFaltas){

    let notaMedia = (nota01 + nota02 + nota03)/3; 

    if(notaMedia >= 7 && porcFaltas < 25)
        return  "Aprovado!";
    if(notaMedia< 7 && porcFaltas < 25)
        return "de Recuperação!";
    if(notaMedia < 5 || porcFaltas>=25)
        return "Reprovado";
}