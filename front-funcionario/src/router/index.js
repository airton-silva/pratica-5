import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Login from '../views/Login.vue'
// import DetailPost from '../views/Detail.vue'
// import User from '../views/User.vue'
// import Post from '../views/Post.vue'
// import Comments from '../components/Comments.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router