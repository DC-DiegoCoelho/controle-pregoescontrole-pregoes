/* O que será esse arquivo

.server.js será o arquivo que inicia o servidor do sistema.
.Ele será responsável por:
.iniciar o Node
.abrir a porta do servidor
.carregar a aplicação

.Como explicar tecnicamente
server.js é o ponto de entrada da aplicação Node, responsável por 
iniciar o servidor e carregar a aplicação.

*/

const express = require ('express'); //Express serve para importar/carregar um módulo, blioteca ou arquivo 
const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");


app.get("/", (req, res) => {
    res.render("home");
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});