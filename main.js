function bemvindo(){
    let nome = prompt("Informe seu nome");
    alert("Bem vindo " + nome);

}

function soma()
{
    let numero1 = prompt("Informe o primeiro numero");
    let numero2 = prompt("Informe o Segundo numero");
    let soma = Number(numero1) + Number(numero2);
    alert("A soma de " + numero1 + ' e número ' + numero2 + ' é igual a ' + soma);
}

function idade()
{
    let nasc = prompt("Informe o ano de nacimento");
    let idade = 2024 - nasc;
    alert("A sua idade é " + idade);
}

function sorvetes()
{
    let qtdSorvetes = prompt("Quantos sorvetes você quer?");
    let valorSorvete = prompt("Qual o valor do sorvete?");
    let valorTotal = Number(qtdSorvetes) * Number(valorSorvete);
    alert("O valor total é " + valorTotal.toFixed(2));
}

function adivinhar(){
    let numeroMagico = Math.ceil(Math.random() * 10);
    console.log(numeroMagico);
    let chute = Number(prompt('Adivinhe o meu número secreto entre 1 e 10'));
    if(chute > 10)
    {
        alert('Eu disse entre 1 e 10 cabeção!');
        return;
    }
    if(chute==numeroMagico)
        alert(`Parabéns! Você alertou o número secreto ${numeroMagico}`);
    else
        alert(`Não foi dessa vez...o número era ${numeroMagico} e você chutou ${chute}`);
}

function exibir(){
    let numero1 = prompt("Informe o primeiro numero");
    let numero2 = prompt("Informe o Segundo numero");
    alert(`Você digitou os números ${numero1} e ${numero2}`);
}

function restaurante(){
    let valorConta = Number(prompt('Informe o valor da conta'));
    let porcentagem = Number(prompt('Informe a porcentagem da gorjeta'));
    let valorReal = (valorConta * porcentagem / 100) + valorConta;
    alert(`O valor da conta com a gorjeta é R$: ${valorReal}`);

}

function multiplicar(){
    let numero1 = Number(prompt('Informe o primeiro número'));
    let numero2 = Number(prompt('Informe o segundo número'));
    let mult = numero1 * numero2;
    alert(`A multiplicação dos valores ${numero1} e ${numero2} é ${mult}`); 
    console.log(mult);
}

function previsao(){
    let nome = prompt('Informe o seu nome');
    let ano = Number(prompt('Qual o ano atual?'));
    let anosExtras = Number(prompt('Quantos anos quer adicionar?'));
    let anoFuturo = ano + anosExtras;
    alert(`${nome}, o ano previsto é ${anoFuturo}`);

}

function exibirNota(){
    let nota = prompt('Informe a nota para exibir');
    alert(`A nota digitada foi "${nota}"`);

}

function adicionarProduto()
{
    let produto =  document.getElementById('nomeProduto').value;
    let qtd =  document.getElementById('qtdProduto').value;
    let unitario =  document.getElementById('valorUnitario').value;
    let subtotal = Number(qtd) * Number(unitario);

    //let novoItem = `<tr><td>${produto}</td><td>${qtd}</td><td>${unitario}</td><td class="subtotal">${subtotal}</td></tr>`;
    let novoItem = '<tr><td>'+produto+'</td><td>'+qtd+'</td><td>'+unitario+'</td><td class="subtotal">'+subtotal+'</td></tr>';
    let tableBody = document.getElementById('tblBody');
    tableBody.innerHTML += novoItem;
}

function calcularMedia()
{
    let disciplina = prompt('Informe o nome da disciplina');
    let primeira = prompt('Informe a primeira nota');
    let segunda = prompt('Informe a segunda nota');
    let terceira = prompt('Informe a terceira nota');
    let mediaSimples = (Number(primeira) + Number(segunda) + Number(terceira)) / 3;
    alert(`Para a disciplina ${disciplina}, a sua média é ${mediaSimples}`);

}

//IF E ELSE

function verificacaoMultipla()
{
    let numero01 = Number(prompt('Informe o primeiro número'));
    let numero02 = Number(prompt('Informe o segundo número'));
    let numero03 = Number(prompt('Informe o terceiro número'));

    if(numero01 > 0 && numero02 > 0 && numero03 > 0)
        alert('Os números são todos positivos!');
    else
        alert('Tem número negativo no meio');
}

function calculadoraSimples()
{
    let numero01 = Number(prompt('Informe o primeiro número'));
    let numero02 = Number(prompt('Informe o segundo número'));
    let operacao = prompt('Informe uma operação matemática(soma, subtração, multiplicação ou divisão)');
    let operacoes = "soma subtração multiplicação divisão";
    if(!operacoes.includes(operacao))
        alert('Operação inválida!');
    else{
        if(operacao ==="soma")
            alert(`O resultado da soma é ${numero01 + numero02}`);
        else if(operacao === "subtração")
            alert(`O resultado da subtração é ${numero01 - numero02}`);
        else if(operacao === "multiplicação")
            alert(`O resultado da multiplicação é ${numero01 * numero02}`);   
        else if(operacao === "divisão")
            if(numero02 === 0)
                alert('Não existe divisão por zero!');
            else
                alert(`O resultado da divisão é ${numero01 /  numero02}`);               
    }
}

function intervalo(){
    let numero = Number(prompt('Informe um número'));
    if(numero>= 50 && numero <=100)
        alert('O número está no intervalo');
    else
        alert('O número não está no intervalo');
}

function desconto()
{
    let valorTotal = Number(prompt('Informe o valor total da compra'));
    if(valorTotal > 100)
        alert(`Valor com desconto ${valorTotal - (valorTotal * 10/100)  }`);
    else
        alert(`Valor sem desconto ${valorTotal}`);
}

function classificacao(){
    let altura = Number(prompt('Informe a sua altura em centimetros'));
    if(altura < 150)
        alert('Você tem altura baixa');
    else if(altura >= 150 && altura <=180)
        alert('Você tem altura média');
    else
        alert('Você tem altura alta');
}

function senha(){
    let senhaCorreta = '1234';
    let senhaDigitada = prompt('Digita sua senha');
    if(senhaCorreta == senhaDigitada)
        alert('Acesso permitido!')
    else
        alert('Acesso negado!')

}

function parImpar()
{
    let numero = Number(prompt('Digite um número'));
    if(numero % 2 !==0){
        if(numero > 50)
            alert(`O número ${numero} é impar e ESPECIAL!`);
        else
            alert(`O número ${numero} é impar`);
    }
    else
        alert(`O número ${numero} é par!`);


}

function etaria(){
    let idade = Number(prompt('Informe sua idade'));
    if(idade <=12)
        alert('Você é uma criança');
    else if(idade > 12 && idade <=17)
        alert('Você é um adolescente');
    else if(idade > 17 && idade <=64)
        alert('Você é um adulto');
    else
        alert('Você é um idoso');
}

function adivinhacaoGame(){
    let numeroSecreto = Math.ceil(Math.random() * 10 + 1) ;
    console.log(numeroSecreto);
    let numero = Number(prompt('Digite um valor entre 1 e 10'));
    if(numero === numeroSecreto)
        alert('Parabéns, você acertou!');
    else
        alert(`Tente novamente, o número secreto era ${numeroSecreto}`);
}

function avaliacaoDesempenho(){
    let nota = Number(prompt('Informe sua nota(0-10)'));
    if(nota < 0 || nota > 10)
        alert('Nota inválida!');
    else if(nota <=4)
        alert('Nota RUIM!');
    else if(nota > 4 && nota < 8 )
        alert('Nota BOA!');
    else
        alert('Nota EXCELENTE!');
        
}

function avaliacaoCandidato(){
let nome = prompt('Informe seu nome');
let idade = Number(prompt('Informe sua idade'));
let provaTecnica = Number(prompt('Informe sua pontuação na prova técninca(0-10)'));
let entrevista = Number(prompt('Informe sua pontuação na entrevista(0-10)'));
let resposta = "";

if(provaTecnica < 0 || provaTecnica > 10 || entrevista < 0 || entrevista > 10){
    alert('Nota da prova ou entrevista inválida');
    return;
}
if(idade<18)
    resposta += 'você não atende aos critérios de idade.';
if(provaTecnica<7)
    resposta += 'sua pontuação na Prova Técnica foi insuficiente.';
if(entrevista<6)
    resposta += 'sua pontuação na Entrevista foi insuficiente.';

if(resposta =="")
    alert(`Parabéns, ${nome}! Você foi aprovado para a vaga`);
else
{
    let retorno = `Desculpe, ${nome}: ${resposta}`;
    alert(retorno);

}
}
    