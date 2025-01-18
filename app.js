//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const input = document.querySelector("#amigo");
const listaAmigos = document.querySelector("#listaAmigos");
const amigoSorteado = document.querySelector("#resultado");

const amigos = [];

function adicionarAmigo() {
  const amigo = input.value;
  if (amigo === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }
  amigos.push(amigo);
  input.value = "";
  mostrarAmigos();
}

function mostrarAmigos() {
  listaAmigos.innerHTML = "";
  amigos.forEach((amigo) => {
    const item = document.createElement("li");
    item.textContent = amigo;
    listaAmigos.appendChild(item);
  });
}

function sortearAmigo() {
  const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  listaAmigos.innerHTML = "";
  amigoSorteado.textContent = `O amigo sorteado é: ${sorteado}`;
}
