 const prompt = require('prompt-sync')();

//FUNÇÕES
const [funcao] = process.argv.slice(2);
 
if (funcao === 'exer01') {
  exer01();
} else if (funcao === 'exer02') {
  exer02(); 
} else if (funcao === 'exer03') {
 exer03();
} else if (funcao === 'exer04') {
  exer04(); 
} else if (funcao === 'exer05') {
    exer05(); 
} else if (funcao === 'exer06') {
    exer06();     
} else if (funcao === 'exer07') {
    exer07(); 
} else if (funcao === 'exer08') {
    exer08(); 
} else if (funcao === 'exer09') {
    exer09();  
} else if (funcao === 'exer10') {
    exer10();               
} else {
  console.log("Não foi digitada nenhuma função! \n Como utilizar? \"nome-arquivo.js nome-funcao\", onde as funções vão de \"exer01\" até \"exer10\" \n Exemplo: exercicios_node.js exer01");
}





//CALCULADORA DE SOMA
function exer01()
{
    let numero01 = prompt('Digite o primeiro número: ');
    let numero02 = prompt('Digite o segundo número: ');
    let soma = parseFloat(numero01) + parseFloat(numero02);
    console.log(`A soma de ${numero01} e ${numero02} é: ${soma}`);
}


//CALCULADORA DE IDADE
function exer02()
{
    let nasc = parseInt(prompt('informe o seu ano de nascimento: '));
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - nasc;
    console.log(`A sua idade é: ${idade}`);
}

//CALCULADORA DE DIFERENÇA
function exer03()
{
    let numero01 = parseFloat(prompt('Digite o primeiro número: '));
    let numero02 = parseFloat(prompt('Digite o segundo número: '));      
    console.log(`A diferença entre o maior e o menor é: ${numero01 > numero02 ? numero01 - numero02: numero02 - numero01}`);

}

//Conversão de Temperatura
function exer04()
{
    let temperatura = parseFloat(prompt('Informe a temperatura em graus Celsius: ')); 
    console.log(`A temperatura ${temperatura}º em Celsius para Fahrenheit é: ${temperatura * 9/5 + 32}`);
}

//Exercício 5: Cadastro de Produto e Cálculo de Valor Total
function exer05()
{
    let nome = prompt('Informe o nome do produto: ');
    let preco = parseFloat(prompt('Informe o preço unitário: ')); 
    let qtd = parseFloat(prompt('Informe a quantidade: ')); 
    let precoTotal = preco*qtd;
    let imposto = precoTotal*18/100;
    let valorTotalComImposto = precoTotal + imposto;
    console.log(`Produto: ${nome} \n Preço: ${preco} \n Quantidade: ${qtd} \n Valor Imposto: ${imposto } \n Valor Total Com Imposto: ${valorTotalComImposto}`);
}

//Exercício 6: Calculadora de Desconto
function exer06()
{
    let nome = prompt('Informe o nome do produto: ');
    let preco = parseFloat(prompt('Informe o preço original: ')); 
    let porcentagem = parseFloat(prompt('Informe o desconto: '));     
    let desconto = preco*porcentagem/100;
    let valorComDesconto = preco - desconto;
    console.log(`Produto: ${nome} \n Preço Original: ${preco} \n Valor Desconto: ${desconto} \n Valor Final: ${valorComDesconto}`);
}


//Exercício 7: Calculadora de Parcelas sem juros
function exer07(){
    let valor = parseFloat(prompt('Informe o valor total da compra: '));
    let qtd = parseInt(prompt('Informe o número de parcelas: ')); 
    let valorParcela = valor/qtd;     
    console.log(`Valor Total da Compra: ${valor} \n Quantidade Parcelas: ${qtd} \n Valor Parcela: ${valorParcela}`);
}

//Exercício 8: Calculadora de Salário
function exer08(){
    let qtd = parseInt(prompt('Informe a quantidade de horas trabalhadas por SEMANA: ')); 
    let valor = parseFloat(prompt('Informe o valor da hora trabalhada: '));
    let salarioSemanal = valor*qtd;     
    let salarioMensal = (valor*qtd) * 4;     
    console.log(`Salário Semanal: ${salarioSemanal} \n Salário Mensal: ${salarioMensal}`);
}

//Exercício 9: DESAFIO: Calculadora de Parcelas com Juros
function exer09()
{
    let valorTotalCompra = parseFloat(prompt('Informe o valor total da compra: ')); 
    let qtd = parseInt(prompt('Informe o número de parcelas: '));     
    let taxa = parseFloat(prompt('Informe a taxa de juros mensal: ')); 
    let taxaPorcentagem = taxa/100;
    let valorParcela = (valorTotalCompra * taxaPorcentagem)/(1-(1+taxaPorcentagem)**(-qtd));
    console.log(`Valor Total: ${valorTotalCompra} \n Número de Parcelas: ${qtd} \n Taxa de Juros Mensal: ${taxa} \n Valor Parcela: ${valorParcela.toFixed(2)}`);
}

//Exercício 10: Par ou Ímpar
function exer10()
{
    let numero = parseInt(prompt('Digite um número inteiro: ')); 
    console.log(`O número ${numero} é: ${numero%2==0? 'PAR' : 'ÍMPAR'} `);
}

