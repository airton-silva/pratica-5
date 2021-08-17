<template>
   
    <div class="row container-fluid">

        <div class="col-md-12">
            <div class="row col-md-8 alert alert-default offset-2">

                <div class="col alert alert alert-dark">
                    <div class="input-group rounded">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                        v-model="search" />
                        <span class="input-group-text border-0" id="search-addon" >
                        <i class="fas fa-search"></i><a href="#" @click="getByCargo()">  buscar</a>
                        </span>
                    </div>
                </div>
                <div class="col alert alert-dark">
                
                <div class="form-group input-group">
                    <div class="row">
                        <div class="col-md-6">
                            <span>Qnt Registro</span>
                            </div>
                                <div class="col-md 4">
                                    <select class="form-control form-control-md" v-model="selected" @blur.prevent="getByQty()">
                                    <option>2</option>
                                    <option>5</option>
                                    <option>10</option>
                                    
                                    </select>
                                </div>
                               
                            </div>

                        </div>
                    </div>
            
        </div>

        <div class="col-md-8 offset-2">       
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Data de Nascimento</th>
                    <th scope="col">Data Admissão</th>
                    <th scope="col">imagem</th>
                    <th scope="col">Opções</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="funcionario in funcionarios" :key="funcionario.id">
                    <th scope="row">{{funcionario.id}}</th>
                    <td>{{funcionario.name}}</td>
                    <td>{{funcionario.cargo}}</td>
                    <td>{{funcionario.data_nasc}}</td>
                    <td>{{funcionario.data_admissao}}</td>
                    <td ><img v-if="funcionario.image" :src="'http://localhost:3000/'+ funcionario.image" alt="funcionario.image"></td>
                    <td >                    
                        <router-link :to="'/detail-func/' + funcionario.id" class="btn btn-outline-info"><i class="fas fa-search"></i> Detalhes</router-link>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>

        </div>

    </div>
    
</template>

<script>
import FuncionarioDataService from "../services/FuncionarioDataService";

export default {
  data() {
    return {
      funcionarios: [],
      title: ""
    };
  },

  created(){
      this.getAllFuncionarios();
  },

  methods: {

    getAllFuncionarios() {
      FuncionarioDataService.getAll()
        .then(response => {
          this.funcionarios = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    getByQty() {
        //alert(this.selected)
        FuncionarioDataService.getByQty(this.selected)
           .then(response => {
            this.funcionarios = response.data;
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
            });

     },

     getByCargo() {
         //alert(this.search)
        FuncionarioDataService.getByCargo(this.search)
           .then(response => {
            this.funcionarios = response.data;
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
            });         
     }
  }
}
</script>