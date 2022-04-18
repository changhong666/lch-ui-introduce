<template>
  <div class="mymenu">
    <el-menu
      :default-active="defaultactive"
      :active="defaultactive"
      router
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :collapse-transition="collapsetransition"
    >
      <div style="margin-top: 30px"></div>
      <sidebar-item
        v-for="(item, i) in menuArr"
        :key="i"
        :indexCount="i"
        :menuItem="item"
      ></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from "./SidebarItem";
export default {
  name: "left",
  components: {
    SidebarItem,
  },
  props: {
    isCollapse: Boolean,
  },
  data() {
    return {
      menuArr: [],
      defaultactive: "",
      collapsetransition: false,
    };
  },
  created() {
    let str = this.$route.path;
    let arr = str.split("/");
    this.defaultactive = "/" + arr[1];
  },
  mounted() {
    this.getMenuData();
  },
  watch: {
    $route() {
      // this.defaultactive = this.$route.path
      this.getActiveMenu(this.$route.path, this.menuArr);
    },
  },
  methods: {
    getActiveMenu(route, arr) {
      arr.forEach((ele) => {
        if (ele.path == "#") {
          this.getActiveMenu(route, ele.children);
        } else {
          if (route.search(ele.path) != -1) {
            this.defaultactive = ele.path;
          }
        }
      });
    },
    getMenuData() {
      this.menuArr = [
        {
          title: "开始",
          icon: "el-icon-ice-tea",
          path: "/main",
          id: 10,
          parentId: -1,
          children: [
            {
              title: "主页",
              path: "/mainPage",
              id: 110,
              parentId: 10,
              children: [],
            },
            {
              title: "安装",
              path: "/setup",
              id: 120,
              parentId: 10,
              children: [],
            },
          ],
        },
        {
          title: "基础组件",
          icon: "el-icon-moon-night",
          path: "#",
          id: 10,
          parentId: -1,
          children: [
            {
              title: "Button-按钮",
              path: "/button",
              id: 101,
              parentId: 10,
              children: [],
            },
            {
              title: "Switch-开关",
              path: "/switch",
              id: 102,
              parentId: 10,
              children: [],
            },
            {
              title: "Radio-单选框",
              path: "/radio",
              id: 103,
              parentId: 10,
              children: [],
            },
            {
              title: "Checkbox-多选框",
              path: "/checkbox",
              id: 104,
              parentId: 10,
              children: [],
            },
            {
              title: "Input-输入框",
              path: "/input",
              id: 105,
              parentId: 10,
              children: [],
            },
            {
              title: "Form-表单",
              path: "/form",
              id: 106,
              parentId: 10,
              children: [],
            },

            {
              title: "Grid-网格",
              path: "/grid",
              id: 107,
              parentId: 10,
              children: [],
            },
            {
              title: "Layout-布局",
              path: "/LchLayout",
              id: 108,
              parentId: 10,
              children: [],
            },
          ],
        },
        {
          title: "进阶组件",
          icon: "el-icon-sunset",
          path: "#",
          id: 20,
          parentId: -1,
          children: [
            {
              title: "Popover-弹出框",
              path: "/popover",
              id: 201,
              parentId: 20,
              children: [],
            },
            {
              title: "Toast-弹窗",
              path: "/toast",
              id: 202,
              parentId: 20,
              children: [],
            },
            {
              title: "Dialog-对话框",
              path: "/dialog",
              id: 203,
              parentId: 20,
              children: [],
            },
          ],
        },
      ];
      // this.$axioServer.login.getMenuList().then(res => {
      //   let c = res.data
      //   that.menuArr = c
      //   that.getActiveMenu(that.$route.path, c)
      // })
    },
    // handleOpen(key, keyPath) {
    //   // console.log(key, keyPath)
    // },
    // handleClose(key, keyPath) {
    //   // console.log(key, keyPath)
    // },
  },
};
</script>

<style scoped>
.el-menu {
  /* border-right: 0 !important; */
  height: 696px;
}
</style>
