function paginadecontato(){
    window.location.href = "Contato.html";
}

const active = document.getElementById('active');
const unactive = document.getElementById('unactive');
const container = document.getElementById('container');

active.addEventListener("click", () =>{
    container.classList.add('active')
})

unactive.addEventListener("click",() =>{
    container.classList.remove('active');
})