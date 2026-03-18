const express = require("express");
const router = express.Router();

const pregoesController = require("../controllers/pregoesController");

router.get("/pregoes", pregoesController.listarPregoes);

module.exports = router;

/* 

        O que isso fez (resumo curto)

        criou um mini servidor de rotas

        definiu a rota /pregoes

        exportou para usar no projeto

*/