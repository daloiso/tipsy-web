export const HOME = {
  path: "",
  name: "home",
  component: () => import("pages/HomePage.vue"),
};

export const ERROR_PAGE = {
  path: "/error",
  name: "error",
  component: () => import("pages/Error404.vue"),
};

export const AUTH_PAGE = {
  path: "/auth",
  name: "auth",
  component: () => import("pages/AuthPage.vue"),
};

export const VISUALIZZA_LOCALI = {
  path: "/visualizzalocali",
  name: "visualizzalocali",
  component: () => import("pages/VisualizzaLocaliPage.vue"),
};

export const LAYOUT_APP = {
  path: "/",
  component: () => import("layouts/MainLayout.vue"),
  children: [HOME, AUTH_PAGE, ERROR_PAGE, VISUALIZZA_LOCALI],
};

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/auth", component: () => import("src/pages/AuthPage.vue") },
      {
        path: "/",
        component: () => import("src/pages/HomePage.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/maps",
        name: "maps",
        component: () => import("pages/Maps.vue"),
      },
    ],
  },
  // Always leave this as the last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
  LAYOUT_APP,
];
export default routes;
