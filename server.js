/* 
- O que será esse arquivo

            .server.js será o arquivo que inicia o servidor do sistema.
            .Ele será responsável por:
            .iniciar o Node
            .abrir a porta do servidor
            .carregar a aplicação

.Como explicar tecnicamente server.js é o ponto de entrada da aplicação Node, responsável por 
iniciar o servidor e carregar a aplicação.
*/

const express = require ('express'); //Express serve para importar/carregar um módulo, blioteca ou arquivo 

const pregoesRoutes = require("./src/routes/pregoesRoutes");

const app = express(); //  PRIMEIRO cria o app
app.use(express.urlencoded({ extended: true }));

                        //Cria a aplicação do servidor. -> “Execute o Express e gere um servidor, guardando em app.”

                        /* 

                                O que a IDE “entende”

                        “Chame o Express e crie uma aplicação pronta para configurar rotas e responder requisições.

                        */

app.use(pregoesRoutes); //  DEPOIS usa




app.set("view engine", "ejs"); //Define qual motor de visualização o servidor vai usar. “Servidor, use EJS para gerar páginas.
    
/* 
    Quebrando a sintaxe

        app           → seu servidor

        .set()        → método para configurar algo

        "view engine" → o que está sendo configurado

        "ejs"         → qual tecnologia usar

*/


app.set("views", "./src/views"); // Define onde estão os arquivos de página (views). -> “Servidor, as páginas estão dentro de ./src/views.”
/* 
    O que a IDE “entende”

“Quando alguém usar res.render(), procure os arquivos dentro dessa pasta.”

*/

app.get("/", (req, res) => { //- >Cria uma rota GET para o caminho /. -> “Quando alguém acessar a página inicial, execute essa função.”
    res.render("home"); // -> .render() → método para renderizar uma view
}); // -> “Vá até a pasta de views, encontre home.ejs, processe e envie como resposta.”


    //.get é um método do Express para criar uma rota.

    //res.render é um método do Express para enviar uma página ao navegador.

    // .listen É um método do Express para iniciar o servidor.



app.listen(3000, () => { // -> Liga o servidor e faz ele escutar uma porta. “Servidor, fique ouvindo na porta 3000.”
    console.log("Servidor rodando em http://localhost:3000");   
});

//