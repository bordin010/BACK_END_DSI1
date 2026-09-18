// INICIO BACKEND - JAVASCRIPT

// VARIÁVEIS

// ANTIGO!!!!!!!!!!!!!!!!!, pode ser redeclarado e mudar o valor
var idade = 10
var idade = 20 // não gera erro

// MAIS MODERNO, pode mudar o valor, mas não pode ser redeclarado
let nome = "Julia"
nome = "Dafny"; // permitido
// let nome = "jose"; //❌ erro

// CONST É FIXO, não pode mudar de valor
const pi = 3.14;
// pi = 40; //❌ erro

// ----------------------------
// FORMAS DE ESCREVER UM CÓDIGO
// ----------------------------

// _____________________________________________________________
// CAMEL CASE ---- * A mais Famosa
// - Primeira palava minúscula
// - Palavras seguintes começam em maiúscula

// let nomeCompleto; let idadeUsuario; functionCalcularIdade(){}

// _____________________________________________________________
// PASCALCASE
// - Todas as palavras começam com letra maiúscula

// class UsuarioSistema {
//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// };

// _____________________________________________________________
// SNAKE CASE
// - Palavras separadas por underscore _

// let nome_completo; let total_vendas;