document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("pedidoForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // bloqueia envio real
    window.location.href = "obrigado.html"; // redireciona
  });
});
