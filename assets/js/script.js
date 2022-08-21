document.querySelectorAll('#modal-produto').forEach(btn => 
    (btn.addEventListener('Clik', () => {
        const idProduto = btn.getAttribute('data-idProduto')
        abrirModal(idProduto)
    })

    )

)


const Produt = [

    {
        id: 1,
        nome: 'pizza com 4 queijos',
        preco: '$ 11,94'


    },
    {
        id: 2,
        nome: 'pizza com 4 queijos',
        preco: '$ 11,94'


    },
    {
        id: 3,
        nome: 'pizza com 4 queijos',
        preco: '$ 11,94'


    },
    {
        id: 4,
        nome: 'pizza com 4 queijos',
        preco: '$ 11,94'


    },
    {
        id: 5,
        nome: 'pizza com 4 queijos',
        preco: '$ 11,94'


    },
    {
        id: 6,
        nome: 'pizza com 4 queijos',
        preco: '$ 11,94'


    },

]


function abrirModal(idProduto){

    const produto = produto.filter(produto => produto.id === idProduto)[0]
    const modal = document.querySelector('.modal-container')
    modal.style.display = 'block';


}

function fecharModal(){
   
    const fechar = document.querySelector('.modal-container')

    fechar.style.display = 'none'

}


