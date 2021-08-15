const Funcionario = require("../models/funcionario-model");
const FuncionarioService = require("../services/funcionario-service");
var funcionarioService = new FuncionarioService();

exports.get = async (req, res) => {
  res.json(await funcionarioService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await funcionarioService.getById(req.params.id));
};

exports.getByCargo = async (req, res) => {
  res.json(await funcionarioService.getByCargo(req.query.cargo));
};

exports.post = async (req, res) => {
  res.json(
    await funcionarioService.add(new Funcionario(req.body.name, req.body.cargo, 
                                                 req.body.data_nasc, req.data_admissao, req.body.image))
  );
};

exports.put = async (req, res) => {
  res.json(
    await funcionarioService.update(
      req.params.id,
      new Funcionario(req.body.name, req.body.cargo, 
        req.body.data_nasc, req.data_admissao, image))
  );
};

exports.delete = (req, res) => {
  res.json(funcionarioService.delete(req.params.id));
};