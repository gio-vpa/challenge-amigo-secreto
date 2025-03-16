let amigos = [];


function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;

  if (nombre.trim() === "") {
    alert("Hola, inserte el nombre de un amigo");
  } else {
    amigos.push(nombre);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}


function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Lista vacia, De favor inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}
