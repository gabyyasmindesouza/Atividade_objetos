// 1. Resolva os passos a seguir
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e lista de compras (um array que sempre terá exatamente três itens). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// "Olá, nome. Hoje seus itens prioritários na lista de comprar são ___, ____ e ____"

const pessoa = {
    nome: 'Gabriela',
    lista: ['Arroz', 'Feijão', 'Macarrão']
}

function objeto(pessoa) {
    console.log(`Olá, ${pessoa.nome}. Hoje seus itens prioritários na lista de compras são ${pessoa.lista[0]}, ${pessoa.lista[1]} e ${pessoa.lista[2]}`)
}
objeto(pessoa)

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de itens. Depois, chame a função feita no item anterior passando como argumento o novo objeto.

const novalista = {
    ...pessoa,
    novalista: ['sal', 'cookie']
}
objeto(novalista)

// 2. Resolva os passos a seguir: 
    
//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
//     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`

const pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: 'Médica'
}

const pessoa2 = {
    nome: 'Julia',
    idade: 28,
    profissao: 'Professora'
}

function objetos() {
    let listaa = []
    let listab = []
    
    listaa.push(pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length)
    listab.push(pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length)

    console.log(listaa)
    console.log(listab)
}
objetos()


// 3. Resolva os passos a seguir: 
    
//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

const carrinho = []
    
//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

const fruta1 = {
    nome: 'Banana',
    disp: true
}

const fruta2 = {
    nome: 'Laranja',
    disp: true
}

const fruta3 = {
    nome: 'Morango',
    disp: false
}
    
//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

function frutas() {
    const itens = prompt("Selecione a fruta que você vai querer")

    if (itens === "Banana") {
        carrinho.push(Banana)
    }

    if (itens === "Laranja") {
        carrinho.push(Laranja)
    }

    if (itens === "Morango") {
        carrinho.push(Morango)
    }
}
frutas()
        
//     d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

console.log(carrinho)

// Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

function pessoa() {
    const nomea = prompt("Qual seu nome")
    const idadea = prompt("Qual a sua idade")
    const profissaoa = prompt("Qual a sua profissão")
}
pessoa()

const pessoaa = {
    ...pessoa
}

console.log(pessoaa)