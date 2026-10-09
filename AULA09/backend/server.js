// ==========================
// NOSSA API DE CACHORROS
// ==========================
// 
// Agora as fotos NÂO são mais baixadas automaticamente!
// Elas DEVEM existir manualmente na pasta
// data/fotos
// ==========================

// ROTAS:
// GET /api/cachorros/aleatorio
// GET /api/cachorros/:raça

// Importa o framework Express para criar o servidor
const express = require("express");
// Importa o CORS para permitir requisições de outros dominios (ex: frontend)
const cors = require("cors");
// Importar o módulo de arquivo do NODE
const fs = require("fs");
// Importa utilidades para trabalhar com caminhos de arquivos
const path = require("path");
// Importa o arquivo JSON que contém as raças e fotos
const cachorros = require("./data/dogs.json");
// Cria a aplicação Express
const app = express();
// Definir a porta onde o servidor irá rodar
const PORT = 3000;
// Habilitar o uso do CORS na aplicação
app.use(cors());

//======================================================
// SERVIR ARQUIVOS ESTÁTICOS 
// =====================================================

// Nós falamos para o express 
// "Tudo o que estiver na pasta data/fotos pode ser acessado pela URL /fotos"
// Exemplo:
// http.//localhost:3000/fotos/husky/1.jpg

app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data/fotos") // caminho real da pasta do servidor
    )
)

// =============================================
// FUNÇÃO AUXILIAR
// =============================================

// função que recebe um array e retorna um item aleatório dele
function sortear(array) {
    // gera um número aleatório entre 0 e o tamanho do array
    // array.length - conta quantos itens existem na lista
    // math.random() - Sorteia um número decimal entre 0 e 1
    // math.random() - array.length - Multiplica o número sorteado pela quantidade de itens
    // math.floor() - tira a parte decimal, arredondando para baixo
    const i = Math.floor(Math.random() * array.length)
    // const i - guarda a posição na variável i
    // retorna o item sorteado
    return array[i];
}

// ===============================
// ROTAS DA API
// ===============================

// ROTA 1 - Cachorro aleatório
app.get("/api/cachorros/aleatorio", (req, res)=> {
// req - request(requisição) = é o pedido que chega ao servidor, por exemplo, o navegador pede uma foto de cachorro
// res - response(resposta) = é o que o seu servidor envia de volta, por exemplo, o endereço da foto do cachorro

// pegar todas as fotos de todas as raças
// object.values pega os valores do objeto
// flat transforma tudo em um único array
const todasAsFotos = Object.values(cachorros).flat();
})

// sorteia uma foto aletória
const item = sortear(todasAsFotos)

// responder para o cliente em formato JSON
res.json({
    //status da resposta
    status: "sucess",
    //URL da imagem que foi sorteada
    message: `http://localhost:${PORT}/fotos/${item}`
});

// ROTA 2 - Cachorro por raça
// exemplo de acesso:
// http://localhost:3000/api/cachorros/husky

app.get("/api/cachorros/:raca", (req, req) => {

    // pega o parametro da URL (ex: husky)
    const raca = req.params.raca.toLocaleLowerCase();
    // params = contém os parâmetros definidos na URL da rota
    // .raca = acessa o parâmetro chamado raca.
    // .toLowerCase() = Transforma todas as letras em minúsculas
    if (cachorros[raca]){
    // cachorros[raca]: procurar a raça dentro do objeto "cachorros"
    //!: significa não: Nesse caso, verifica se a raça nõ existe ou se seu valor é falso
    // se não existir, retorna erro 404
    res.status(404).json({

    })

    //encerra a execução da reta
    return;

    }

    // sorteia uma foto da raça solicitada
    const item = sortear(cachorros[raca]);

    // retorna a resposta em JSON
    res.json({
        status: "sucess",
        message: `http://localhost:${PORT}/fotos/${item}`
    })

})

// =======================================
// INICIA O SERVIDOR
// =======================================

// INICIA O SERVIDOR EXPRESS
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📂 Coloque as fotos manualmente em: data/fotos/`);
    
})