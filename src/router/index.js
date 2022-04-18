import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/LchMain",
    name: "LchMain",
    redirect: "/mainPage",
    component: () => import("@/views/LchMain/main.vue"),
    children: [
      {
        path: "/mainPage",
        name: "mainPage",
        component: () => import("@/views/mainPage/index.vue"),
        meta: {
          title: "主页",
        },
      },
      {
        path: "/setup",
        name: "setup",
        component: () => import("@/views/SetUp/setup.vue"),
        meta: {
          title: "安装",
        },
      },
      {
        path: "/button",
        name: "button",
        component: () => import("@/views/button/button.vue"),
        meta: {
          title: "按钮",
        },
      },
      {
        path: "/switch",
        name: "switch",
        component: () => import("@/views/switch/switch.vue"),
        meta: {
          title: "开关",
        },
      },
      {
        path: "/radio",
        name: "radio",
        component: () => import("@/views/radio/radio.vue"),
        meta: {
          title: "单选框",
        },
      },
      {
        path: "/checkbox",
        name: "checkbox",
        component: () => import("@/views/checkbox/checkbox.vue"),
        meta: {
          title: "多选框",
        },
      },
      {
        path: "/input",
        name: "input",
        component: () => import("@/views/input/input.vue"),
        meta: {
          title: "输入框",
        },
      },
      {
        path: "/form",
        name: "form",
        component: () => import("@/views/form/form.vue"),
        meta: {
          title: "表单",
        },
      },
      {
        path: "/grid",
        name: "grid",
        component: () => import("@/views/grid/grid.vue"),
        meta: {
          title: "网格",
        },
      },
      {
        path: "/LchLayout",
        name: "LchLayout",
        component: () => import("@/views/LchLayout/layout.vue"),
        meta: {
          title: "布局",
        },
      },
      {
        path: "/popover",
        name: "popover",
        component: () => import("@/views/popover/popover.vue"),
        meta: {
          title: "弹出框",
        },
      },
      {
        path: "/dialog",
        name: "dialog",
        component: () => import("@/views/dialog/dialog.vue"),
        meta: {
          title: "对话框",
        },
      },
      {
        path: "/toast",
        name: "toast",
        component: () => import("@/views/toast/toast.vue"),
        meta: {
          title: "弹窗",
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
