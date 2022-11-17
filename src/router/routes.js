const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("src/pages/AuthPage.vue") },
      {
        path: "/home",
        component: () => import("src/pages/HomePage.vue"),
        meta: { requiresAuth: true },
      },
    ],
  },
  // Always leave this as the last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];
export default routes;
