const prompt = require('prompt-sync')();

let cor =  prompt("Digite uma cor(red,blue ou green): ");

switch(cor.toLocaleLowerCase()){
    case "red":
        console.log("Vermelho");
        break;
    case "blue":
        console.log("Azul");
        break;
    case "green":
        console.log("Verde");
        break;
    default:
        console.log("Cor inválida!");
}
