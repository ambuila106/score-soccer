import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import GeneralLayout from "../layouts/GeneralLayout.vue";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    component: GeneralLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
