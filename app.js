// Adiciona ouvintes de eventos aos botões
document.getElementById('encrypt-btn').addEventListener('click', encryptText);
document.getElementById('decrypt-btn').addEventListener('click', decryptText);
document.getElementById('copy-btn').addEventListener('click', copyText);

// Função para validar letras minúsculas
function isLowerCase(str) {
    return str === str.toLowerCase();
}
// Função para verificar se uma palavra possui acentuação
function hasAccent(word) {
    const regex = /[ÁÀÃÉÈÍÌÓÒÕÚÙÇáàãéèíìóòõúùç]/i;
    return regex.test(word);
}

// Função de criptografia
function encryptText() {
    const input = document.getElementById('input-text').value;
    if (!isLowerCase(input) || hasAccent(input) ) {
        alert('Por favor, use apenas letras minúsculas sem acentos.');
        return;
    }

    const encrypted = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('output-text').value = encrypted;
}

// Função de descriptografia
function decryptText() {
    const input = document.getElementById('input-text').value;

    if (!isLowerCase(input)) {
        alert('Por favor, use apenas letras minúsculas sem acentos.');
        return;
    }

    const decrypted = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('output-text').value = decrypted;
}

// Função para copiar texto e limpar o input
function copyText() {
    const output = document.getElementById('output-text');
    output.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');

    // Limpa o campo de entrada
    document.getElementById('input-text').value = '';
}
