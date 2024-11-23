const prompt = require('prompt-sync')();

let bebida =  prompt("Escolha uma das bebidas(água/suco/refrigerante/café): ").toLocaleLowerCase();

switch(bebida.toLocaleLowerCase()){
    case "agua":
        console.log("Aqui está sua água");
        break;
    case "suco":
        console.log("Aqui está seu suco");
        break;
    case "refrigerante":
        console.log("Aqui está seu refrigerante");
        break;
    case "cafe":
        console.log("Aqui está seu café");
        break;
    default:
        console.log("Não temos essa bebida!");
}
