<template>
  <div>
    <lch-layout>
      <lch-header>
        <span>
          <a href="#" class="headertop" @click="goToIndex">Lch-UI</a>
        </span>
        <span style="margin-left: 30px"><i class="el-icon-ice-tea"></i> </span>
        <span class="rightheader"
          ><a href="https://github.com/changhong666/lch-ui" target="_break"
            >github <img src="../index/git.jpg" width="25px" /></a
        ></span>

        <span class="rightheader1"
          ><a href="https://www.npmjs.com/package/lch-cqupt-ui" target="_break"
            >npm<img src="../index/npm.jpg" width="25px" /></a
        ></span>
        <div class="xian"></div>
      </lch-header>
    </lch-layout>
    <lch-layout>
      <lch-sider style="width: 300px; height: 696px">
        <LeftMenu></LeftMenu>
      </lch-sider>
      <!-- <lch-sider
        style="width: 1px; background-color: #cfc8c8; height: 695px"
      ></lch-sider> -->
      <lch-content class="mainmax">
        <div style="height: 38px">
          <main-tag />
        </div>
        <div class="main_con">
          <router-view :key="Date.now()" />
        </div>
      </lch-content>
    </lch-layout>
  </div>
</template>

<script>
import LeftMenu from "@/components/layout/left";
import MainTag from "@/components/layout/mainTag";
export default {
  name: "LchMain",
  components: {
    LeftMenu,
    MainTag,
  },
  data() {
    return {};
  },
  methods: {
    goToIndex() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0px;
  padding: 0px;
}
.header,
.footer {
  background-color: #ffff;
  color: #333;
  line-height: 55px;
  border-bottom: 1px, solid, black;
}

.xian {
  height: 1px;
  background-color: #cfc8c8;
}

.content {
  background-color: #ffffff;
  color: #333;
}
.headertop {
  position: relative;
  left: 20px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
}
.rightheader {
  position: absolute;
  right: 70px;
  font-size: 1.1rem;
  font-weight: 400;
  color: #2c3e50;
}
.rightheader1 {
  position: absolute;
  right: 200px;
  font-size: 1.1rem;
  font-weight: 400;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
.mainmax {
  position: absolute;
  left: 20%;
  width: 1225px;
  height: 695px;
}
.main_con {
  height: calc(100% - 66px);
  margin: 9px 10px;
  padding-top: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  background: #ffffff;
  position: relative;
}
</style>
