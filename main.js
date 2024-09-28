onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove('not-loaded');
    clearTimeout(c);
  }, 1000);
};

document.addEventListener('DOMContentLoaded', function () {
  // Seleciona a imagem que será exibida
  const flowerImage = document.getElementById('flower-image');

  // Função para exibir a imagem após 2 segundos
  setTimeout(function () {
    flowerImage.classList.remove('hidden-image'); // Remove a classe que oculta a imagem
    flowerImage.classList.add('visible-image'); // Adiciona a classe para exibir a imagem
  }, 2000); // 2000 milissegundos = 2 segundos
});
