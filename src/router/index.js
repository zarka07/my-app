import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from '../views/PostList.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PostList',
    component: PostList
  },
  {
    path: '/post/:id',
    name: 'Id',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Post.vue", webpackMode: "lazy" */'../views/Post.vue')
  },
  {
    path: '*',
    redirect: "/"
  }
]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router
