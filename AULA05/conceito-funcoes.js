// FUNÇÕES EM JAVASCRIPT

// O que é um afunção?
// Uma função é um bloco de código reutilizável, cria para executar uma tarefa específica.

// Analogia SIMPLES!
// Você vai colocar valores (parâmetros).
// Ela processa.
// Devolve um resultado (return)

// ------------------------------
// Estrutura básica de uma função
// ------------------------------

// function nomeDaFuncao(parametro1, parametro2){
//     // código será executado
// return resultado;
// }

// function ---> palavra-chave
// nomeDaFuncao ---> nome da função
// parâmetros ---> valores que a função recebe
// return ---> valor que a função devolve

// 5 EXEMPLOS 

// 1 - Somar dois números

function somar(a, b) {
    return a + b;
}
console.log(somar(2,3))

// 2 - Coverter real para dólar
function realParaDolar(valorReal, cotacao) {
    return valorReal / cotacao;
}
console.log(realParaDolar(10,5.20).toFixed(2))

// 3 - Coverter dólar para real

function dolarParaReal(valorDolar, cotacao) {
    return valorDolar * cotacao;
}
console.log(dolarParaReal(5,5.20))

// 4 - Aumento de salário (Você merece 25% de aumento)

function aumentoDeSalario(salario, aumento) {
    return (salario * aumento / 100) + salario;
}
console.log("Seu salário será de: " + aumentoDeSalario(1200, 25));

// Verifique se é par ou impar?

// function parOuImpar(numero) {
//     if (numero % 2 === 0){
//         return "Seu número é par"
//     }
//     else{
//         return "Seu número é impar"
//     }
// }

// console.log(parOuImpar(3))

// Outra maneira:

function parOuImpar(numero){
    return numero % 2 === 0 ?"par" :"impar";
    // Se o resto for 0 ---> retorna "par"
    // caso contrário ---> retorna "impar" 
}
console.log(parOuImpar(2))