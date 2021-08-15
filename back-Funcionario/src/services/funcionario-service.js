const funcionarioRepo = require("../repositories/funcionario-repo");

class FuncionarioService {
  add(funcionario) {
    return funcionarioRepo.save(funcionario);
  }

  getAll() {
    return funcionarioRepo.findAll();
  }

  getById(id) {
    return funcionarioRepo.findOne(id);
  }

  getByCargo(cargo) {
    return funcionarioRepo.findByName(cargo);
  }

  update(id, funcionario) {
    return funcionarioRepo.update(id, funcionario);
  }

  delete(id) {
    return funcionarioRepo.delete(id);
  }
}

module.exports = FuncionarioService;