import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import NotFound from "../views/NotFound.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Welcome,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  { path: "/:pathMatch(.*)*", name: "notFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
