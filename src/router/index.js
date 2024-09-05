import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: { showHeader: true },
    },
    {
      path: "/records",
      name: "records",
      component: () => import("../views/RecordsView.vue"),
      meta: { showHeader: true },
    },
    {
      path: "/personalrecord",
      name: "personal-record",
      component: () => import("../views/PersonalRecordView.vue"),
      meta: { showHeader: true },
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/SignInView.vue"),
      meta: { showHeader: false },
    },
  ],
});

export default router;
