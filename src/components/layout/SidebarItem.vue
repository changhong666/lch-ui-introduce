<template>
  <el-menu-item v-if="menuItem.children.length == 0" :index="menuItem.path">
    <i v-if="menuItem.icon" :class="menuItem.icon"></i>
    <span slot="title" :style="!menuItem.icon ? 'margin-left:10px' : ''">{{
      menuItem.title
    }}</span>
  </el-menu-item>
  <el-submenu v-else :index="indexCount + ''">
    <template slot="title">
      <i v-if="menuItem.icon" :class="menuItem.icon"></i>
      <span>{{ menuItem.title }}</span>
    </template>
    <sidebar-item
      v-for="item in menuItem.children"
      :key="item.k"
      :menuItem="item"
    ></sidebar-item>
  </el-submenu>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    menuItem: Object,
    indexCount: Number,
  },
};
</script>

<style scoped></style>
