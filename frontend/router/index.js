// router/index.js
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    // Simple auth guard
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem("yt_token");
      if (!token) next("/");
      else next();
    },
  },
];

export default new VueRouter({ routes });
