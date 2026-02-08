const resultBox = document.getElementById('resultBox');
const topLeft = document.getElementById('topLeft');
const topRight = document.getElementById('topRight');
const bottomRight = document.getElementById('bottomRight');
const bottomLeft = document.getElementById('bottomLeft');
const topLeftValue = document.getElementById('topLeftValue');
const topRightValue = document.getElementById('topRightValue');
const bottomRightValue = document.getElementById('bottomRightValue');
const bottomLeftValue = document.getElementById('bottomLeftValue');
const cssCode = document.getElementById('cssCode');
const notification = document.getElementById('notification');
const copyButton = document.getElementById('copyButton');

function updateBorderRadius() {
    const tl = topLeft.value;
    const tr = topRight.value;
    const br = bottomRight.value;
    const bl = bottomLeft.value;

    resultBox.style.borderRadius = `${tl}px ${tr}px ${br}px ${bl}px`;
    cssCode.textContent = `border-radius: ${tl}px ${tr}px ${br}px ${bl}px;`;
    topLeftValue.textContent = `${tl}px`;
    topRightValue.textContent = `${tr}px`;
    bottomRightValue.textContent = `${br}px`;
    bottomLeftValue.textContent = `${bl}px`;
}

topLeft.addEventListener('input', updateBorderRadius);
topRight.addEventListener('input', updateBorderRadius);
bottomRight.addEventListener('input', updateBorderRadius);
bottomLeft.addEventListener('input', updateBorderRadius);



// Função para copiar o código CSS para a área de transferência
function copyToClipboard() {
    console.log('Copiando para a área de transferência...');
    const text = document.getElementById('cssCode').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Código CSS copiado: ' + text);
    }).catch(err => {
        console.error('Erro ao copiar para a área de transferência: ', err);
    });
}

copyButton.addEventListener('click', copyToClipboard);



