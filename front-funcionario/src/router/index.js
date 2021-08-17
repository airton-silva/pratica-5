import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
 import Detail from '../views/Detail.vue'
 import Funcionario from '../views/Funcionario.vue'
 import EditarFuncionario from '../views/EditarFuncionario.vue'
// import Post from '../views/Post.vue'
// import Comments from '../components/Comments.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    
  },

  {
    path: '/detail-func/:id',
    name: 'detail',
    component: Detail,
    
  },

  {
    path: '/funcionario',
    name: 'funcionario',
    component: Funcionario,
    
  },

  {
    path: '/funcionario/edit/:id',
    name: 'editar',
    component: EditarFuncionario,
    
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router