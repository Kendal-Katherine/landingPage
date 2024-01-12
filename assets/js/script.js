


let nome = window.document.getElementById('nome')
let email = window.document.querySelector('#email')
let assunto = window.document.querySelector('#assunto')
let mensagem = window.document.querySelector('#mensagem')
let mapa = document.querySelector('#mapa')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mensagemOk = false

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length <= 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }
    else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true

    }
}


function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true

    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = '<h1>O assunto deve conter no máximo 100 caracteres</h1>'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'

    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true

    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector('#txtMensagem')

    if (mensagem.value.length >= 1000) {
        txtMensagem.innerHTML = '<h1>A mensagem deve conter no máximo 1000 caracteres</h1><br>'
        txtMensagem.style.color = 'red'

        txtMensagem.style.display = 'block'

    } else {
        txtMensagem.style.display = 'none'
        mensagemOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true && mensagemOk == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha todos os campos corretamente')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
    
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
    
}