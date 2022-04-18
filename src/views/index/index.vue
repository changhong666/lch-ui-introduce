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
            >github <img src="./git.jpg" width="25px" /></a
        ></span>

        <span class="rightheader1"
          ><a href="https://www.npmjs.com/package/lch-cqupt-ui" target="_break"
            >npm<img src="./npm.jpg" width="25px" /></a
        ></span>
      </lch-header>
      <div class="xian"></div>
      <lch-content>
        <div class="maintag">
          <div style="margin-top: 50px">
            <img src="./tubiao.png" width="200px" />
          </div>
          <div style="font-size: 3rem; font-weight: 500; color: #2c3e50">
            Lch UI
          </div>
          <div style="font-size: 1.6rem; color: #6a8bad; margin-top: 30px">
            一个基于Vue的学生自建ui组件库
          </div>
          <div style="margin-top: 50px">
            <a href="#" class="action-button" @click="goToMain">快速上手 →</a>
          </div>
          <div class="xian" style="margin-top: 50px"></div>
          <div class="jiesao">
            <span style="width: 28%; margin-right: 30px">
              <a
                style="font-size: 1.3rem; font-weight: 500; color: #2c3e50"
                href="#"
                @click="goToIndex"
                >Lch-ui</a
              >
              <div style="color: #6a8bad">
                Lch UI 是一套基于 Vue2.0
                +Sass的简易的UI组件，它包含一些常用的布局和控件，帮助开发者快速构筑PC端界面。
              </div>
            </span>
            <span style="width: 28%; margin-right: 30px">
              <a
                style="font-size: 1.3rem; font-weight: 500; color: #2c3e50"
                href="https://cn.vuejs.org/"
                target="_break"
                >Vue</a
              >
              <div style="color: #6a8bad">
                Vue
                是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue
                被设计为可以自底向上逐层应用。
              </div>
            </span>
            <span style="width: 28%">
              <a
                style="font-size: 1.3rem; font-weight: 500; color: #2c3e50"
                href="https://www.sass.hk/"
                target="_break"
                >Sass</a
              >
              <div style="color: #6a8bad">
                Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量
                、嵌套 、混合 、导入 等高级功能
              </div></span
            >
          </div>
        </div>
      </lch-content>
    </lch-layout>
  </div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {};
  },
  methods: {
    goToIndex() {
      this.$router.push("/");
    },
    goToMain() {
      this.$router.push("/mainPage");
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
  text-align: center;
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
.maintag {
  position: absolute;
  left: 20%;
  width: 900px;
}
.jiesao {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.action-button {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: #a88548;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #baaf3d;
}
</style>
