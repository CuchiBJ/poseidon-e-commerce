import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from "@/firebase.js";

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/login.vue"),
  },
  {
    path: "/dash",
    name: "dash",
    component: () =>
      import("../views/dash.vue"),
  },
  {
    path: "/productos",
    name: "productos",
    component:() =>
      import("../views/productos.vue"),
  },
  {
    path: "/producto/:id",
    name: "producto",
    component:() =>
      import("../views/producto.vue"),
  },
  {
    path: "/addProducto",
    name: "addProducto",
    component:() =>
      import("../views/addProducto.vue"),
  },
  {
    path: "/clientes",
    name: "clientes",
    component:() =>
      import("../views/Clientes.vue"),
  },
  {
    path: "/admindash",
    name: "admindash",
    component:() =>
      import("../views/AdminDash.vue"),
  },
  {
    path: "/ventas",
    name: "ventas",
    component:() =>
      import("../views/Ventas.vue"),
  },
  {
    path: "/venta/:id",
    name: "venta",
    component:() =>
      import("../views/Venta.vue"),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next("/login");
  } else {
    next();
  }
});

export default router
