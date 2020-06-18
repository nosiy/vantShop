import Vue from "vue";
import VueRouter from "vue-router";

// import Home from "../components/main/home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name:'index',
    redirect:'/home',
    children:[
      {
        path: "/home",
        name: "Home",
        component: () => import("@/components/tabber/home.vue"),
      },
      {
        path: "/tabber/classify",
        name: "mainClassify",
        component: () => import("@/components/tabber/classify.vue"),
      },
      {
        path: "/tabber/cart",
        name: "mainCart",
        component: () => import("@/components/tabber/cart.vue"),
      },
      {
        path: "/tabber/user",
        name: "mainUser",
        component: () => import("@/components/tabber/user.vue"),
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
