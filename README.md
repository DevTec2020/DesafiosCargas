# Desafios de Programação

## 01 - Imposto de Renda

Leia um valor com duas casas decimais, equivalente ao salário de uma pessoa. Em seguida, calcule e mostre o valor que esta pessoa deve pagar de Imposto de Renda, segundo a tabela abaixo:

| Renda                      | Imposto de Renda |
|----------------------------|------------------|
| de R$ 0.00 a R$ 2000.00   | Isento           |
| de R$ 2000.01 até R$ 3000.00 | 8%               |
| de R$ 3000.01 até R$ 4500.00 | 18%              |
| acima de R$ 4500.00       | 28%              |

Se o salário for **R$ 3002.00**, a taxa que incide é de **8% apenas sobre R$ 1000.00**, pois a faixa de salário que fica de **R$ 0.00 até R$ 2000.00** é isenta de Imposto de Renda.

Exemplo de cálculo:
- 8% sobre R$ 1000.00 + 18% sobre R$ 2.00 = **R$ 80.36** no total.
- O valor deve ser impresso com **duas casas decimais**.

### Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

### Saída
Imprima o texto **"R$"** seguido de um espaço e do valor total devido de Imposto de Renda, com duas casas após o ponto. Se o valor de entrada for menor ou igual a **2000**, deverá ser impressa a mensagem **"Isento"**.

---

## 02 - Múltiplos de 13

Escreva um algoritmo que leia **2 valores inteiros X e Y** e calcule a soma dos números que **não são múltiplos de 13** entre **X e Y**, incluindo ambos.

### Entrada
O arquivo de entrada contém **2 valores inteiros quaisquer**, não necessariamente em ordem crescente.

### Saída
Imprima a soma de todos os valores **não divisíveis por 13** entre os dois valores lidos na entrada, inclusive ambos se for o caso.

---

## 03 - Substituição em Vetor I

Faça um programa que leia um vetor **X[10]**. Substitua, a seguir, **todos os valores nulos e negativos do vetor X por 1**. Em seguida, mostre o vetor X.

### Entrada
A entrada contém **10 valores inteiros**, podendo ser positivos ou negativos.

### Saída
Para cada posição do vetor, escreva **"X[i] = x"**, onde **i** é a posição do vetor e **x** é o valor armazenado naquela posição.

