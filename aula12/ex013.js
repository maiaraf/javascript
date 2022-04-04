var agora = new Date();
var diaSemana = agora.getDay();
switch (diaSemana) {
    case 0:
        console.log("Domingo");
        //o uso do break é obrigatório para ele não passar por todos os cases;
        break;
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
     case 3:
        console.log("Quarta")    ;
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:    
        console.log("Sexta");
        break;
    case 6:
        console.log("Sábado");
        break;       
    default:
        console.log("SáDia Invalido");
        break;
}