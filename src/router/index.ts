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

  {
    path: "/match/:matchTitle",
    name: "Match",
    component: () => import("../views/Match.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
