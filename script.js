fotos.forEach((foto) => {
  const fotoElement = document.createElement("div");
  fotoElement.className = "foto";

  const imgElement = document.createElement("img");
  imgElement.src = foto.src;
  imgElement.alt = foto.alt;

  const mensagemElement = document.createElement("p");
  mensagemElement.innerText = foto.mensagem;

  fotoElement.appendChild(imgElement);
  fotoElement.appendChild(mensagemElement);
  fotosContainer.appendChild(fotoElement);
});
