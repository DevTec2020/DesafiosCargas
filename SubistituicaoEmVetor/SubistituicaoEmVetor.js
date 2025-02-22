let ArrayDeNumeros = [];

// Função para gerar array de números positivos e negativos
function GeraNumeroAleatorio(){
    const max = 5;
    const min = -5;

    for(let i = 0; i < 10; i++){
        let NumeroAleatorio =  Math.floor(Math.random() * (max - min + 1)) + min;
        ArrayDeNumeros.push(NumeroAleatorio)
    }
}

// Função para substituir valores do Array
function SubstituirValores() {
    for(let i = 0; i < ArrayDeNumeros.length; i++){
        if (ArrayDeNumeros[i] <= 0) {
            ArrayDeNumeros[i] = 1;
        }  
    }
}

// Apresentando valores
GeraNumeroAleatorio()
console.log(`Valores do Array original \n`, ArrayDeNumeros, `\n`)

// Substituindo valores
SubstituirValores()
console.log(`Segue valores corrigidos`)
for(let i = 0; i < ArrayDeNumeros.length; i++){
    console.log(`posição[${i}] = ${ArrayDeNumeros[i]}`)
}
