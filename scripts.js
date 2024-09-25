// Função para trocar a cor de fundo da página
function trocaCor(cor) {
    document.body.style.backgroundImage = 'none'; // Remove qualquer imagem de fundo
    document.body.style.backgroundColor = cor; // Aplica a nova cor de fundo
}

// Função para gerar uma cor aleatória e aplicá-la ao fundo
function corAleatoria() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // Cor em formato RGB
}

// Função para aplicar a cor personalizada inserida no input de texto
function aplicaCorPersonalizada() {
    const corInput = document.querySelector('.input-cor').value;

    if (isCorValida(corInput)) { // Verifica se a cor inserida é válida
        trocaCor(corInput);
    } else {
        alert("Por favor, insira uma cor válida.\n OBS: Só é aceito nomes de cores em inglês!"); // Alerta em caso de cor inválida
    }
}

// Função para validar se a cor inserida no input é válida
function isCorValida(cor) {
    const div = document.createElement('div'); // Cria um elemento temporário
    div.style.backgroundColor = cor; // Tenta aplicar a cor ao elemento
    return div.style.backgroundColor !== ''; // Verifica se a cor foi aplicada com sucesso
}

// Função para alterar a imagem de fundo com base na imagem escolhida
function EscolherImagem(imagem) {
    const reader = new FileReader();

    reader.onload = function(evento) {
        const urlImagem = evento.target.result; // Obtém a URL da imagem
        document.body.style.backgroundImage = `url('${urlImagem}')`; // Aplica a imagem como fundo
    }

    reader.readAsDataURL(imagem); // Lê o arquivo da imagem
}

// Função para focar automaticamente no input de cor quando a página é carregada
window.onload = function() {
    document.querySelector('.input-cor').focus(); // Foca no input de cor
}

// Evento para detectar quando a tecla "Enter" é pressionada no input de cor
document.querySelector('.input-cor').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Verifica se a tecla pressionada foi o "Enter"
        aplicaCorPersonalizada(); // Chama a função de aplicar a cor
    }
});