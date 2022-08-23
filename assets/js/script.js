document.querySelectorAll('.modal-buttom')
    .forEach(btn => {
        console.log(btn)
        btn.addEventListener('click', () => {
            const idProduto = btn.getAttribute('data-idProduto')
            abrirModal(idProduto)
        })
    }
)


const products = [
    {
        id: 1,
        nome: 'pizza com 4 queijos',
        preco: '$ 11,94'


    },
    {
        id: 2,
        nome: 'pizza com 5 queijos',
        preco: '$ 11,94'


    },
    {
        id: 3,
        nome: 'pizza com 6 queijos',
        preco: '$ 11,94'


    },
    {
        id: 4,
        nome: 'pizza com 7 queijos',
        preco: '$ 11,94'


    },
    {
        id: 5,
        nome: 'pizza com 8 queijos',
        preco: '$ 11,94'


    },
    {
        id: 6,
        nome: 'pizza com 9 queijos',
        preco: '$ 11,94'


    },

]


function abrirModal(idProduto){
    const produto = products.filter(produto => produto.id == idProduto)[0]
    const modal = document.querySelector('.modal-container')
    modal.style.display = 'block';
    document.querySelector('#name-product').textContent = produto.nome
}

function fecharModal(){
   
    const fechar = document.querySelector('.modal-container')

    fechar.style.display = 'none'

}