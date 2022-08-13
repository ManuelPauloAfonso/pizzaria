const modal = document.querySelector('modal-container')
const abrirModal = document.querySelector('.login-button')
const fechar = document.querySelector('.fechar')



function abrirModal(event){
    event.preventDefault();
    modal.classList.add('ativo', 'modal');


}

function fecharModal(event){
    event.preventDefault();
    modal.classList.add('ativo')
}


botaoFechar.addEventListener('click', fecharModal);
botaonAbrir.addEventListener('click', abrirModal);


console.log('Olá')