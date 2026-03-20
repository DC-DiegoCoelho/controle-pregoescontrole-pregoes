const pregoes = [];

const listarPregoes = (req, res) => {
  res.render("pregoes", { pregoes });
};

const criarPregao = (req, res) => {
   const { titulo, orgao, valor } = req.body;

  pregoes.push({
  titulo: titulo,
  orgao: orgao,
  valor: valor
  });

  console.log(pregoes);

  res.redirect("/pregoes");
};

module.exports = {
  listarPregoes,
  criarPregao
}; 