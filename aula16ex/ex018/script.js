let numero = document.getElementById("numero");
let lista = document.getElementById("lista");
let resultado = document.querySelector("div#resultado");
let valores = [];

function isNumero(n) {
   if (Number(n) >= 1 && Number(n) <= 100) {
      return true;
   } else {
      return false;
   }
}

function inLista(n,l) {
   if (l.indexOf(Number(n)) != -1) {
      return true;
   } else {
      return false;
   }
}

function adicionarNumero() {
   if (isNumero(numero.value) && !inLista(numero.value, valores)) {
      valores.push(Number(numero.value));
      let item = document.createElement("option");
      item.text = `Valor ${numero.value} adicionado`;
      lista.appendChild(item);
      resultado.innerHTML = ""
   } else {
      alert("Valor inválido ou já existente na lista");  
   }
   //Essa linha apaga o valor colocado no input. 
   numero.value = "";
   //Essa linha coloca o cursor automaticamente no input após adicionar.
   numero.focus();
}

function finalizar() {
   if (valores.length == ""){
      alert("Adicione valores antes de finalizar!");
   } else {
      let total = valores.length;
      let maior = valores[0];
      let menor = valores[0];
      let soma = 0;
      let media = 0;
   //Lê-se: para cada posição entre valores. 
      for (let posição in valores) {
         soma += valores[posição];
         if (valores[posição] > maior)
            maior = valores[posição];
         if (valores[posição] < menor)
            menor = valores[posição];     
      }
      media = soma / total
      resultado.innerHTML = `<p>Ao todo, temos ${total} número(s) cadastrado(s).</p>`;
      resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
      resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
      resultado.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`;
      resultado.innerHTML += `<p>A média de todos os valores é ${media}.</p>`;
   }   
}
