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