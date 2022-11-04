const enviar = document.getElementById('enviar')

enviar.addEventListener('click',(event) => {
    event.preventDefault()

    const email = document.getElementById('email')
    const nome = document.getElementById('nome')
    const mensagem = document.getElementById('mensagem')

    if(email.value == ''){
        email.classList.add('errorInput');
    }
    else{
        email.classList.remove("errorInput")
    }

    if(mensagem.value == ''){
        mensagem.classList.add('errorInput');
    }
    else{
        mensagem.classList.remove("errorInput")
    }

    if(nome.value ==''){
        nome.classList.add('errorInput');
    }
    else{
        nome.classList.remove("errorInput")
    }

    if (email.value.indexOf("@")== -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)){
        email.classList.add('errorInput')
        
    }
    else{
        email.classList.remove("errorInput")
    }
    if(!isNaN(email.value) == true && email.value.length == 11){
        email.classList.remove("errorInput")
    }
    
})