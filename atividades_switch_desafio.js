const prompt = require('prompt-sync')();

console.log("Legenda de eventos: \n 1- Workshop \n 2- Palestra \n 3- Hackathon");
let tipo =  parseInt(prompt("Digite o número o tipo de evento: "));

switch(tipo){
    case 1:
        let partic = parseInt(prompt("Digite o número participantes: "));
        console.log(`Esse "Workshop" com ${partic} participantes vai custar R$ ${partic*50}`);
        break;
    case 2:
        let horas = parseFloat(prompt("Digite o número de horas: "));
        console.log(`Essa "Palestra" de ${horas} horas vai custar R$ ${horas*100}`);
        break;
    case 3:
        let dias = parseInt(prompt("Digite o número de dias: "));
        let equipes = parseInt(prompt("Digite o número de equipes: "));
        console.log(`Esse "Hackathon" de ${dias} dias e ${equipes} equipes vai custar R$ ${(dias*equipes)*500}`);
        break;
    default:
        console.log("Evento inválido");
}
