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

terminal.innerHTML = terminal.innerHTML.replace('<span class="cursor"></span>', '')
terminal.innerHTML += linhas[i] + "<br><span class='cursor'></span>"

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
particleCount: 100,
angle: 60,
spread: 70,
origin: { x: 0 }
});

confetti({
particleCount: 100,
angle: 120,
spread: 70,
origin: { x: 1 }
});

mostrarTexto()

},2000)

}

else{

document.getElementById("erro").innerText = "Opss, acho que você não deveria estar aqui :/"

}

}


function mostrarTexto(){

let texto = "Feliz aniversário, Raoni!! Queria te desejar muitoos anos de vida, muita saúde, paz, dinheiro e muita, mas muita coisa boa mesmo, afinal, você merece! Quero te agradecer por ser esse amigo incrivel, dedicado, cuidadoso, gentil e divertido pra cacete. Não sei o que seria dos meus dias sem você para incomodar, saiba que te amo muitooo e que sempre vou estar aqui quando precisar."


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

const canvas = document.getElementById("matrix")
const ctx = canvas.getContext("2d")

canvas.height = window.innerHeight
canvas.width = window.innerWidth

const letras = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const arrayLetras = letras.split("")

const fontSize = 16
const columns = canvas.width / fontSize

const drops = []

for(let x = 0; x < columns; x++){
drops[x] = 1
}

function desenharMatrix(){

ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.fillStyle = "#00ff9c"
ctx.font = fontSize + "px monospace"

for(let i = 0; i < drops.length; i++){

const text = arrayLetras[Math.floor(Math.random()*arrayLetras.length)]

ctx.fillText(text, i*fontSize, drops[i]*fontSize)

if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
drops[i] = 0
}

drops[i]++

}

}

setInterval(desenharMatrix, 35)
