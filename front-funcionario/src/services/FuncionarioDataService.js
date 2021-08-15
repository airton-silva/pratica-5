import http from "../http-common";

class FuncionarioDataService {
  getAll() {
    return http.get("/funcionarios");
  }

  get(id) {
    return http.get(`/funcionarios/${id}`);
  }

  create(data) {
    return http.post("/funcionarios", data);
  }

  update(id, data) {
    return http.put(`/funcionarios/${id}`, data);
  }

  delete(id) {
    return http.delete(`/funcionarios/${id}`);
  }

  deleteAll() {
    return http.delete(`/funcionarios`);
  }

  findByCargo(cargo) {
    return http.get(`/funcionarios?title=${cargo}`);
  }
}

export default new FuncionarioDataService();