import Vue from "vue";
import VueRouter from "vue-router";

// import Home from "../components/main/home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:'/tabber',
  },
  {
    path: "/main",
    redirect:'/tabber',
  },
  {
    path: "/tabber",
    name: "tabber",
    redirect:'/home',
    component: () => import("@/components/tabber/tabber.vue"),
    children:[
      {
        path: "/home",
        name:'home',
        component: () => import("@/components/tabber/home.vue"),
      },
      {
        path: "/classify",
        name: "classify",
        component: () => import("@/components/tabber/classify.vue"),
      },
      {
        path: "/cart",
        name: "cart",
        component: () => import("@/components/tabber/cart.vue"),
      },
      {
        path: "/user",
        name: "user",
        component: () => import("@/components/tabber/user.vue"),
      },
    ]
  },
  {
    path: "/site",
    name: "site",
    component: () => import("@/views/site/site.vue"),
  },
  {
    path: "/siteEdit",
    name: "siteEdit",
    component: () => import("@/views/site/siteEdit.vue"),
  },
  {
    path: "/coupon",
    name: "coupon",
    component: () => import("@/views/coupon/coupon.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("@/views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
