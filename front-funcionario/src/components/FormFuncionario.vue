<template>

    <div class="row">
      <div class="col-md-12">
        <div class="col-md-8 offset-2">
            <div class="card">
                <div class="card-header">
                    <h4>Funcionario <strong>{{funcionario.id}}</strong></h4>
                </div>
                <div class="card-body">

                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="name">Nome</label>
                                <input type="text" class="form-control" v-model="funcionario.name" placeholder="Nome">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="cargo">Cargo</label>
                                <input type="text" class="form-control" v-model="funcionario.cargo" placeholder="Cargo">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="data_nasc">Data de Nascimento</label>
                                <input type="date" class="form-control" v-model="funcionario.data_nasc">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="data_admissao">Data de Admissão</label>
                                <input type="date" class="form-control" v-model="funcionario.data_admissao">
                            </div>

                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlFile1">Upload de Imagem</label>
                            <input type="file" ref="image" class="form-control-file" name="image">
                        </div>
                        <button type="submit" class="btn btn-primary offset-10" @click.prevent="addFuncionario()">Salvar</button>
                    </form>

                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>

import FuncionarioDataService from "../services/FuncionarioDataService";

export default {
  name: 'FormFuncionario',

    data() {
        return {
            funcionario:{
                id:null,
                name :'',
                cargo:'',
                data_nasc:'',
                data_admissao:'',
                //image:'',
            }, 
            file:'',           
            
        };
    },

    methods: {

        addFuncionario() {
            var parametros = {
                name: this.funcionario.name,
                cargo: this.funcionario.cargo,
                data_nasc: this.funcionario.data_nasc,
                data_admissao: this.funcionario.data_admissao,                
                //image: this.$refs.image.files[0],
            };


            let json = JSON.stringify(parametros)
            this.file = this.$refs.image.files[0];

            let form = new FormData();
            form.append("funcionario", json);
            form.append("image", this.file );
            
            


            console.log(form.getAll("image"));
            console.log(form.getAll("funcionario"));

            FuncionarioDataService.create(form)
                .then(response => {
                    this.funcionario = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },

    },

}
</script>