import Vue from "vue";
import VueRouter from "vue-router";
//import navtest from "../components/navtest.vue"

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/qq",
  //   name: "navtest",
  //   component: navtest,
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
