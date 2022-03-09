/* Selecionar a lista de opções de botões */
const listaBotoes = document.querySelector(".detalhes_opcoesTransacoes")

/* Adicionar um evento aos botões */
listaBotoes.addEventListener("click", identificadorBotoes)

/* Função para identificar os botões */
function identificadorBotoes(event)
{
    const elemento = event.target
    if (elemento.tagName == "LI")
    {
        const id = elemento.id
        const secaoSelecionada = document.querySelector(`div[data-id="${id}"]`)
        removeClassMostrar()
        secaoSelecionada.classList.add("mostrar")
    }
}

/* Função para remover as classes das divs */
function removeClassMostrar()
{
    const divs = document.querySelectorAll(".transacao .container div")
    for(let i = 0;i < divs.length; i++)
    {
        divs[i].classList.remove("mostrar")
    }
}