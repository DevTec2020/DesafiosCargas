
// Função para gerar dois números aleatórios
function GeraNumeroAleatorio(){
    let NumeroX = Math.floor(Math.random() * 20)
    let NumeroY = Math.floor(Math.random() * 20)
    
    return {NumeroX, NumeroY}
}

// Ordenando números 
let { NumeroX, NumeroY } = GeraNumeroAleatorio()
let MenorValor = Math.min(NumeroX, NumeroY)
let MaiorValor = Math.max(NumeroX, NumeroY)

// Função que entrega a sequencia dos números 
function GeraSequenciaDeNumeros(MenorValor, MaiorValor){
    let ArraySequenciaDeNumeros = [];

    for(let i = MenorValor; i <= MaiorValor; i++){
        ArraySequenciaDeNumeros.push(i)
    }

    return ArraySequenciaDeNumeros
}

// Função que calcula a soma dos números que não são múltiplos de 13
function SomaNaoMultiplos(SequenciaDeNumeros){
    return SequenciaDeNumeros.reduce((SomaItens, Iten) => {
        return (Iten % 13 !== 0 ) ? SomaItens + Iten : SomaItens
    })
}

// Gerando a seguencia dos números
let SequenciaDeNumeros = GeraSequenciaDeNumeros(MenorValor, MaiorValor);
let SomaTotal = SomaNaoMultiplos(SequenciaDeNumeros);


// Apresentando valores em tela
console.log(`Os Valores Sorteados foram: X: ${NumeroX} e Y: ${NumeroY} `)
console.log(`Segue sequencia de números: ${GeraSequenciaDeNumeros(MenorValor, MaiorValor)}`)
console.log(`A Soma dos multiplos é: ${SomaTotal}`)
