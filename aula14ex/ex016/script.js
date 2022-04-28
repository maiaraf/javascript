function Contar() {
 let inicio = parseInt(document.getElementById("inicio").value);
 let fim = parseInt(document.getElementById("fim").value);
 let passo = parseInt(document.getElementById("passo").value);
 let contagem = document.getElementById("contagem");

 if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
   contagem.innerHTML = 'Impossível contar!'
 } else {
     contagem.innerHTML = `Contando: <br>`;
     if (passo <= 0) {
       alert(`Passo inválido! Conseiderando Passo 1`);
       passo = 1 
     }
     if (inicio < fim) {
       //contagem crescente
       while (inicio <= fim) {
         contagem.innerHTML += ` ${inicio} \u{1F449}`;
         inicio += passo;
      }
     } else {
       //contagem decrescente
       while (inicio > fim) {
         contagem.innerHTML += ` ${inicio} \u{1F449}`;
         inicio -= passo;
       }
     }
      contagem.innerHTML += `\u{1F3C1}`;
   }
    
}
 


