import { createRouter, createWebHistory } from "vue-router";

import SignIn from "../views/SignIn.vue";
import Home from "../views/Home.vue";
import Contact from "../views/AddContact.vue";
import UpdateContact from "../views/UpdateContact.vue";

const routerHistory = createWebHistory();

const routes = [
  {
    path: "/",
    redirect: "/signin",
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/updatecontact/:userId",
    name: "UpdateContact",
    component: UpdateContact,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/signin",
  },
];

const router = createRouter({
  history: routerHistory,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});
export default router;
