// Função que calcula o imposto a pagar
function CalculoDeImposto(Renda){
    let InpostoAPagar = 0;

    // Caso o valor não entre em nehuma faixa de cobrança, será apresentado a mensagem que é isento
    if (Renda > 2000.00) {
        // Em cada Faixa eu estou tirando o valor exedente que já foi calculado, assim passo um valor correto para as demais faixas.
        if (Renda > 4500.00){
            InpostoAPagar += ((Renda - 4500.00) * 28) /100;
            Renda = 4500.00
        }

        if (Renda > 3000.00){
            InpostoAPagar += ((Renda - 3000.00) * 18) /100;
            Renda = 3000.00
        }

        if (Renda > 2000.00){
            InpostoAPagar += ((Renda - 2000.00) * 8) /100;
            Renda = 2000.00
        } 

        // Apresenta o valor a ser pago
        console.log(`O Valor do imposto a pagar é de R$:${InpostoAPagar.toFixed(2)}`)
    } else {
        console.log("Você é isento de pagar")
    }
}

// Acionando a função. Agora passando o valor como parametro.
CalculoDeImposto(3002.00)



