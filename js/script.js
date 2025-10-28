
//carrossel automatico
let count =  1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 4000)

function nextImage(){
    count++;
    if(count > 3){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

//desafio 1: botao carrossel -> contato
const botao = document.querySelector("#btnOrcamento");

botao.onclick = function() {
  window.location.href = "contato.html";
}


//contato enviar
form.addEventListener("submit", (e) => {
  e.preventDefault();
});