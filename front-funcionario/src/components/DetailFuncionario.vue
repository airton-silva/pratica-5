<template>
    
    <div class="row">
      <div class="col-md-12">
        <div class="col-md-8 offset-2">
            <div class="card">
                <div class="card-header">
                    <h4>Detalhes do Funcionario Id: <strong>{{funcionario.id}}</strong></h4>
                </div>
                <div class="card-body">
                    <ul class="text-left">
                        <li>
                            <span><img :src="'localhost:3000'+funcionario.image" alt=""></span>
                        </li>
                        <li>
                            <span><strong>Nome : </strong>{{funcionario.name}}</span>
                        </li>
                        <li>
                            <span><strong>Cargo : </strong>{{funcionario.cargo}}</span>
                        </li>
                        <li>
                            <span><strong>Data Nasc.: </strong>{{funcionario.data_nasc}}</span>
                            <span class="offset-2"><strong>Data Admissão: </strong>{{funcionario.data_admissao}}</span>
                        </li>
                        
                    </ul>
                        <span class="offset-9">
                            <router-link :to="'/funcionario/edit/' + funcionario.id" class="btn btn-outline-warning"><i class="far fa-edit"></i> Editar </router-link>
                        </span>
                        <span style="padding:5px;">
                            <button  @click="deleteFuncionario(funcionario.id)" class="btn btn-outline-danger"><i class="far fa-trash-alt"></i> Deletar </button>
                        </span>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>

import FuncionarioDataService from "../services/FuncionarioDataService";

export default {
  name: 'DetailFuncionario',

    data() {
        return {
            funcionario:'',            
            
        };
    },

    methods: {

        getFuncionarioById(id) {
            FuncionarioDataService.get(id)
            .then(response => {
                this.funcionario = response.data;
                this.quebraString(this.funcionario);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        },

        deleteFuncionario(id) {
            
            FuncionarioDataService.delete(id)
                .then(response => {
                console.log(response.data);
                alert("Usuario removido com Sucesso");
                this.$router.push({ name: "home" });
                })
                .catch(e => {
                console.log(e);
                });
    
        },

        quebraString(str) {
             var q = str.image.replace('public/', '/');
             this.funcionario.image = q;
        }

    },

            
        mounted() {
            this.message = '';
            this.getFuncionarioById(this.$route.params.id);
            //this.quebraString();
            //this.getTutorial(this.$route.params.id);
        }


}
</script>