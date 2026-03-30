let linhas = [

"Iniciando sistema...",

"Conectando banco de memórias...",

"Verificando identidade...",

"Digite o nome do usuário para continuar."

]

let i = 0

let terminal = document.getElementById("terminal")


function escreverTerminal(){

if(i < linhas.length){

terminal.innerHTML += linhas[i] + "<br>"

i++

setTimeout(escreverTerminal, 1000)

}

}

escreverTerminal()


function verificar(){

let nome = document.getElementById("nome").value.trim().toLowerCase()

let nomeCorreto = "raoni"

if(nome === nomeCorreto){

document.getElementById("erro").innerText = ""

terminal.innerHTML += "<br>ACESSO AUTORIZADO..."

setTimeout(function(){

document.getElementById("login").style.display = "none"

document.getElementById("conteudo").style.display = "flex"

document.getElementById("musica").play()

confetti({
particleCount: 150,
spread: 90,
origin: { y: 0.6 }
});

mostrarTexto()

},2000)

}

else{

document.getElementById("erro").innerText = "Opss, acho que você não deveria estar aqui :/"

}

}


function mostrarTexto(){

let texto = "Feliz aniversário, Raoni!! Queria te desejar muitoos anos de vida, muita saúde, paz, dinheiro e muita, mas muita coisa boa mesmo, afinal, você merece! Quero te agradecer por ser esse amigo incrivel, dedicado, cuidadoso, gentil e divertido pra cacete. Não sei o que seria dos meus dias sem você para incomodar, saiba que te amo muitooo e que sempre vou estar aqui quando presicar."


let mensagem = document.getElementById("mensagem")

mensagem.innerHTML = ""

let indice = 0

let intervalo = setInterval(function(){

mensagem.innerHTML += texto[indice]

indice++

if(indice >= texto.length){

clearInterval(intervalo)

setTimeout(function(){

document.getElementById("carta").classList.add("sumir")

},6000)

}

},70)

}