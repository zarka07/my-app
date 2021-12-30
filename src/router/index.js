import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from '../views/PostList.vue'
import CV from '../views/CV.vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PostList',
    component: PostList
  },
  {
    path: '/CV',
    name: 'CV',
    component: () => import((/* webpackChunkName: "CV.vue", webpackMode: "lazy" */'../views/CV.vue'))
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      VueScrollTo.scrollTo("#app", 500, { offset: savedPosition.y });
      return savedPosition;
    } else {
      VueScrollTo.scrollTo("#app");
    }
  },
})

export default router
