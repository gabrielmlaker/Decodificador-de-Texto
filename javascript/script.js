const textArea = document.querySelector(".textarea-left")
const mensagem = document.querySelector(".textarea-right")

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensagem.value = textoEncriptado;
    textArea.value = ""
}

function encriptar(stringEncriptada) {
    let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCode.length; i++) {
        if (stringEncriptada.includes(matrizCode[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCode[i][0], matrizCode[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value)
    mensagem.value = textoDesencriptado;
    textArea.value = ""
}

function desencriptar(stringDesencriptada) {

    let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCode.length; i++) {
        if (stringDesencriptada.includes(matrizCode[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCode[i][1], matrizCode[i][0])
        }
    }
    return stringDesencriptada
}

function btnCopyText() {
    let copyText = document.querySelector(".textarea-right")
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
    alert("Cópia do texto: " + copyText.value)
}
const imgs = document.getElementsByTagName('.textarea-right:background-image');
function apagarImagem() {
    if (imgs.style.display == 'inline-block') {
        imgs.style.display = 'none'
    }
    return apagarImagem
}

