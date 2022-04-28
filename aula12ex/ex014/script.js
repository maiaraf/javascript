const morningColor = "#ffd057";
const afternoonColor = "#eabc81";
const nightColor = "#14303d"

function Carregar() {
var hora = new Date().toLocaleTimeString('pt-BR');
document.getElementById("horas").innerHTML = `Agora são ${hora} horas.`;
var horaFormatada = parseFloat(hora);
var imagem = document.getElementById("imagem");
var bodyStyle = document.body.style;

if (horaFormatada >= 0 && horaFormatada < 12) {
    imagem.innerHTML = "<img src='https://images.pexels.com/photos/585759/pexels-photo-585759.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' class='imagemStyle'>";
    bodyStyle.backgroundColor = morningColor
} else if (horaFormatada >= 12 && horaFormatada <= 18) {
    imagem.innerHTML = "<img src='https://images.pexels.com/photos/4167177/pexels-photo-4167177.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' class='imagemStyle'>";
    bodyStyle.backgroundColor = afternoonColor;
} else {
    imagem.innerHTML = "<img src='https://images.pexels.com/photos/977736/pexels-photo-977736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' class='imagemStyle'>";
    bodyStyle.backgroundColor = nightColor;
}   

}
 
