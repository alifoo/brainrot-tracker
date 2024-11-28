import Vue from "vue";
import VueRouter from "vue-router";
import LoginScreen from "@/views/LoginScreen.vue";
import MainDashboard from "@/views/MainDashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginScreen",
    component: LoginScreen,
  },
  {
    path: "/dashboard",
    name: "MainDashboard",
    component: MainDashboard,
    // Simple auth guard
    // beforeEnter: (to, from, next) => {
    //   const token = localStorage.getItem("yt_token");
    //   if (!token) next("/");
    //   else next();
    // },
  },
];

const router = new VueRouter({
  mode: "history", // Optional: for cleaner URLs without #
  routes,
});

export default router;
