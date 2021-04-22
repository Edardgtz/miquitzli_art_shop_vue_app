import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Signup from "../views/Signup.vue";
import ProductsIndex from "../views/ProductsIndex.vue";
import ProductsShow from "../views/ProductsShow.vue";
import CartedProducts from "../views/CartedProducts.vue";
import OrdersIndex from "../views/OrdersIndex.vue";
import OrdersShow from "../views/OrdersShow";
import VueInputAutowidth from 'vue-input-autowidth'

Vue.use(VueRouter);
Vue.use(VueInputAutowidth);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products/index',
    name: 'products-index',
    component: ProductsIndex
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/products/:id',
    name: 'products-show',
    component: ProductsShow
  },
  {
    path: '/carted_products',
    name: 'carted-products',
    component: CartedProducts
  },
  {
    path: '/orders_index',
    name: 'orders-index',
    component: OrdersIndex
  },
  {
    path: '/orders_show',
    name: 'orders-show',
    component: OrdersShow
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
