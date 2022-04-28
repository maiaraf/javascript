function gerarTabuada() {
    let numero = document.getElementById("numero").value;
   let tabuada = document.getElementById("tabuada");
   
   if (numero.length == 0) {
       alert("Por favor,digite um número!");
    } else {
       let numeroConvertido = parseInt(numero);
       //atribuir "" á variável tabuada faz com que ela apague o valor que tem dentro dela e atribua um novo valor.
       tabuada.innerHTML = ""
       for (let c = 0; c <= 10; c++){
          let item = document.createElement("option");
          item.text = `${numeroConvertido} x ${c} = ${numeroConvertido*c}`;
          //a declaração a baixo é mais utilizada em outras linguagens.Ela indentifica qual valor foi selecionado.
          item.value = `tabuada${c}`
          tabuada.appendChild(item);
       }
    }
}
