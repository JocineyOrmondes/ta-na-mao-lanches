// Seleciona todos os elementos de cliente
const clientes = document.querySelectorAll(".cliente img, .cliente p, .cliente strong");
const botoes = document.querySelectorAll(".botoes button");

// Índice inicial
let indice = 0;

// Função para mostrar apenas o depoimento atual
function mostrarDepoimento(i) {
  // Oculta todos os elementos
  clientes.forEach(el => el.style.display = "none");

  // Cada cliente tem 3 elementos (img, p, strong)
  const inicio = i * 3;
  clientes[inicio].style.display = "block";
  clientes[inicio + 1].style.display = "block";
  clientes[inicio + 2].style.display = "block";
}

// Mostra o primeiro depoimento ao carregar
mostrarDepoimento(indice);

// Botão Anterior
botoes[0].addEventListener("click", () => {
  indice = (indice - 1 + 5) % 5; // 5 clientes
  mostrarDepoimento(indice);
});

// Botão Próximo
botoes[1].addEventListener("click", () => {
  indice = (indice + 1) % 5;
  mostrarDepoimento(indice);
});
