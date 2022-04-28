function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var anoDeNascimento = document.getElementById("anoDeNascimento").value; 
  var resultado = document.getElementById("resultado");
  var imagem = document.getElementById("imagem")
  if (anoDeNascimento == 0 || Number(anoDeNascimento) > ano) {
      alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
      var sexo = document.getElementsByName("sexo")
      var idade = ano - anoDeNascimento;
      var gênero = "";
      var img = document.createElement("img");
      img.setAttribute("class", "imagestyle");
      if (sexo[0].checked) {
         gênero = "Homem"
         if (idade >= 0 && idade <= 10) {
            img.setAttribute("src", "https://images.pexels.com/photos/7790550/pexels-photo-7790550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
         } else if (idade <= 21) {
            img.setAttribute("src", "https://images.pexels.com/photos/1578531/pexels-photo-1578531.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
         } else if (idade <= 50) {
            img.setAttribute("src", "https://images.pexels.com/photos/8727509/pexels-photo-8727509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
         } else {
            img.setAttribute("src", "https://images.pexels.com/photos/3831612/pexels-photo-3831612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
         }
      } else if (sexo[1].checked) {
         gênero = "Mulher"
         if (idade >= 0 && idade < 10) {
            img.setAttribute("src", "https://images.pexels.com/photos/7200637/pexels-photo-7200637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
         } else if (idade < 21) {
            img.setAttribute("src", "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
         } else if (idade < 50) {
            img.setAttribute("src", "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
         } else {
            img.setAttribute("src", "https://images.pexels.com/photos/2382890/pexels-photo-2382890.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
         }
      }
     resultado.style.textAlign = "center";
     resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
     resultado.appendChild(img);
  }    
}
