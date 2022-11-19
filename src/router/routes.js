export const HOME ={
  path:"",
  name:"home",
  component:()=>import("pages/HomePage.vue")
}

export const ERROR_PAGE ={
  path:"/error",
  name:"error",
  component:()=>import("pages/Error404.vue")
}

export const AUTH_PAGE ={
  path:"/auth",
  name:"auth",
  component:()=>import("pages/AuthPage.vue")
}

export const LAYOUT_APP ={
  path:"/",
  component:()=>import("layouts/MainLayout.vue"),
  children:[HOME, AUTH_PAGE, ERROR_PAGE]
}

const routes = [
  /*
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
    ],
  },
  // Always leave this as the last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
  */
  LAYOUT_APP
];
export default routes;
