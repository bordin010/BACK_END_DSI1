// Tipos de dados
// No javascript, tudo o que armazenamos em variáveis tem um tipo. Esses tipos definem o que podemos fazer com os valores.

// Principais tipos de dados:
// String (textos)
// Number (números)
// Boolean (verdadeiro ou falso)
// Object (Objetos, que agrupam informações)
// Array (Listas de valores)
// Null (Valor vazio)
// Undefined (quando algo não foi definido)

// STRING (Textos)
// Uma String é um texto, sempre escrito entre aspas ("" ou '')
let nome = "Jarvis"
let mensagem = 'Olá, mundo!';

// console.log(nome);
// console.log(mensagem);

let saudacao = "Olá, " + nome + "!";
console.log(saudacao); // Exibe "Olá, Jarvis"

// typeof
// O type serve para descobrir o tipo de um valor ou variável

// let nomeDois = "Bryan - Não pode fone de ouvido!";
// let nomeTres = "Vilar - Não pode celular!";
// console.log(typeof nomeDois)

let soma = 10 + 5;
console.log(soma);

// Boolean (Verdadeiro ou Falso)
// Um boolean pode ter apenas dois valores: true (verdadeiro) ou false (falso)

let maiorDeIdade = true;
let menorDeIdade = false;

console.log(maiorDeIdade); // Exibir true
console.log(menorDeIdade); // Exibir false

let idade = 20;
let podeDirigir = idade >= 18;
console.log(podeDirigir);

// TAMANHO DE UMA STRING

let seuSistemaFoihackeado = "zerou!"
console.log(seuSistemaFoihackeado.length);

// LETRAS MAIÚSCULAS E MINÚSCULAS

let regra = "não pode celular"
console.log(regra.toUpperCase());

let regra2 = "PODE CELULAR";
console.log(regra.toLowerCase());