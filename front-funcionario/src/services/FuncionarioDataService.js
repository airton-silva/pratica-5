import http from "../http-common";

class FuncionarioDataService {
  getAll() {
    return http.get("/funcionarios");
  }

  get(id) {
    return http.get(`/funcionarios/${id}`);
  }

  create(data) {
    return http.post("/funcionarios", data,{headers:{
      "Content-Type": "multipart/form-data",
    }});
  }

  update(id, data) {
    return http.put(`/funcionarios/${id}`, data,{headers:{
      "Content-Type": "multipart/form-data",
    }});
  }

  delete(id) {
    return http.delete(`/funcionarios/${id}`);
  }

  deleteAll() {
    return http.delete(`/funcionarios`);
  }

  getByCargo(cargo) {
    return http.get(`/funcionarios/search?cargo=${cargo}`);
  }
  getByQty(qty) {
    return http.get(`/funcionarios/qty?qty=${qty}`);
  }
}

export default new FuncionarioDataService();