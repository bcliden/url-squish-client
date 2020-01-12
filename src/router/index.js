import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import New from "../views/New.vue";
import Detail from "../views/Detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/new",
    name: "new",
    component: New
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: Detail
  }
];

const router = new VueRouter({
  routes
});

export default router;
