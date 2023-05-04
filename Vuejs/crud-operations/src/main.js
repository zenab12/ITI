import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import home_users from "./components/pages/home-users";
import user_details from "./components/pages/user-Details";
import insert from "./components/pages/add-user";
import edit from "./components/pages/edit-user";

import error_404 from "./components/pages/error-404";

const routes = [
  {
    path: "/",
    component: home_users,
    alias: "/users",
  },
  {
    path: "/users/:id",
    component: user_details,
  },
  {
    path: "/:NotFound(.*)*",
    component: error_404,
    meta: { hideNavbar: true },
  },
  {
    path: "/insert",
    component: insert,
  },
  {
    path: "/edit/:id",
    component: edit,
  },
];

const route = createRouter({ history: createWebHistory(), routes });
createApp(App).use(route).mount("#app");
