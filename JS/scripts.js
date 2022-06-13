   const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "Com certeza!",
  "Melhor você não saber isso agora",
  "Você já sabe a resposta talvez só não queira aceitar",
  "Não conte com isso.",
  "Se eu te contar você tentará mudar",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Você está procurando respostas certa para perguntas erradas, faça outra.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "Faça outra pergunta, essa é muito fácil",
  "Minhas fontes dizem não.",
  "Os deuses reservam coisas boas sobre isso",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Deve sempre esperar o pior assim você evitará decepções",
  "Se acredita nisso então é verdade para você",
  "Sinais apontam que sim.",
]

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aletorio
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 5 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 5000)
}
