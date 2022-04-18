<template>
  <div>
    <div>
      <div style="padding-top: 20px">
        <h1>Button-按钮</h1>
        <div style="padding-top: 20px">
          <a style="color: #5e6d82">常用的操作按钮</a>
        </div>
      </div>
      <div style="width: 760px; padding-top: 20px">
        <div>
          <div style="padding-bottom: 20px">
            <h2>基础用法</h2>
            <div style="padding-top: 20px">
              <a style="color: #5e6d82"
                >使用type、plain属性来定义 Button 的样式。</a
              >
            </div>
          </div>
          <!-- 基础用法 -->
          <div class="componentInc">
            <div class="xiangge">
              <h3>普通按钮</h3>
              <span class="xiangge"><lch-button>button</lch-button></span>
              <span class="xiangge"
                ><lch-button type="primary">primary</lch-button></span
              >
              <span class="xiangge"
                ><lch-button type="success">success</lch-button></span
              >
              <span class="xiangge"
                ><lch-button type="info">info</lch-button></span
              >
              <span class="xiangge"
                ><lch-button type="warning">warning</lch-button></span
              >
              <span class="xiangge">
                <lch-button type="danger">danger</lch-button></span
              >
            </div>

            <div class="xiangge">
              <h3>朴素按钮</h3>

              <span class="xiangge"><lch-button plain>button</lch-button></span>
              <span class="xiangge"
                ><lch-button type="primary" plain>primary</lch-button></span
              >
              <span class="xiangge"
                ><lch-button type="success" plain>success</lch-button></span
              >
              <span class="xiangge"
                ><lch-button type="info" plain>info</lch-button></span
              >
              <span class="xiangge"
                ><lch-button type="warning" plain>warning</lch-button></span
              >
              <span class="xiangge">
                <lch-button type="danger" plain>danger</lch-button></span
              >
            </div>
            <div>
              <a href="#">
                <div
                  v-if="candisplay1"
                  class="displayBar"
                  @click="changedisplay1"
                >
                  显示代码
                </div>
              </a>
              <div v-if="display1">
                <!-- 代码区 -->
                <textarea
                  class="daimaqu"
                  readonly="value"
                  v-model="text1"
                  style="height: 300px"
                >
                </textarea>
                <div class="displayBar" @click="disChange1">隐藏代码</div>
              </div>
            </div>
          </div>

          <!-- 美化按钮 -->
          <div style="padding-bottom: 20px">
            <h2>美化按钮</h2>
            <div style="padding-top: 20px">
              <a style="color: #5e6d82"
                >使用type、round、icon属性来定义 Button 的样式。</a
              >
            </div>
          </div>
          <div class="componentInc">
            <div class="xiangge">
              <h3>圆角按钮</h3>
              <span class="xiangge"><lch-button round>button</lch-button></span>
              <span class="xiangge"
                ><lch-button type="primary" round>primary</lch-button></span
              >
              <span class="xiangge"
                ><lch-button type="success" round>success</lch-button></span
              >
              <span class="xiangge"
                ><lch-button type="info" round>info</lch-button></span
              >
              <span class="xiangge"
                ><lch-button type="warning" round>warning</lch-button></span
              >
              <span class="xiangge">
                <lch-button type="danger" round>danger</lch-button></span
              >
            </div>
            <div class="xiangge">
              <h3>圆形按钮</h3>
              <span class="xiangge">
                <lch-button circle icon="lch-icon-Aa"> </lch-button
              ></span>
              <span class="xiangge"
                ><lch-button type="primary" circle icon="lch-icon-zhinanzhen">
                </lch-button
              ></span>
              <span class="xiangge"
                ><lch-button type="success" circle icon="lch-icon-guanbi">
                </lch-button
              ></span>
              <span class="xiangge">
                <lch-button type="info" circle icon="lch-icon-huanyipi">
                </lch-button
              ></span>
              <span class="xiangge"
                ><lch-button type="warning" circle icon="lch-icon-search">
                </lch-button
              ></span>
              <span class="xiangge"
                ><lch-button type="danger" circle icon="lch-icon-app4">
                </lch-button
              ></span>
            </div>
            <div>
              <a href="#">
                <div
                  v-if="candisplay2"
                  class="displayBar"
                  @click="changedisplay2"
                >
                  显示代码
                </div>
              </a>
              <div v-if="display2">
                <!-- 代码区 -->
                <!-- <div class="zhushiqu">111</div> -->
                <textarea
                  class="daimaqu"
                  readonly="value"
                  v-model="text2"
                  style="height: 300px"
                >
                </textarea>
                <div class="displayBar" @click="disChange2">隐藏代码</div>
              </div>
            </div>
          </div>

          <!-- 特殊按钮 -->
          <div style="padding-bottom: 20px">
            <h2>特殊按钮</h2>
            <div style="padding-top: 20px">
              <a style="color: #5e6d82"
                >使用type、disabled、icon属性来定义 Button 的样式。</a
              >
            </div>
          </div>
          <div class="componentInc">
            <div class="xiangge">
              <h3>禁用按钮</h3>
              <span class="xiangge"
                ><lch-button disabled>button</lch-button></span
              >
              <span class="xiangge"
                ><lch-button type="primary" disabled>primary</lch-button></span
              >
              <span class="xiangge"
                ><lch-button type="success" disabled>success</lch-button></span
              >
              <span class="xiangge"
                ><lch-button type="info" disabled>info</lch-button></span
              >
              <span class="xiangge"
                ><lch-button type="warning" disabled>warning</lch-button></span
              >
              <span class="xiangge">
                <lch-button type="danger" disabled>danger</lch-button></span
              >
            </div>
            <div class="xiangge">
              <h3>文字加图标按钮</h3>
              <span class="xiangge"
                ><lch-button icon="lch-icon-Aa">button</lch-button></span
              >
              <span class="xiangge"
                ><lch-button type="primary" icon="lch-icon-zhinanzhen"
                  >primary</lch-button
                ></span
              >
              <span class="xiangge"
                ><lch-button type="success" icon="lch-icon-guanbi"
                  >success</lch-button
                ></span
              >
              <span class="xiangge"
                ><lch-button type="info" icon="lch-icon-huanyipi"
                  >info</lch-button
                ></span
              >
              <span class="xiangge"
                ><lch-button type="warning" icon="lch-icon-search"
                  >warning</lch-button
                ></span
              >
              <span class="xiangge"
                ><lch-button type="danger" icon="lch-icon-app4"
                  >danger</lch-button
                ></span
              >
            </div>
            <div>
              <a href="#">
                <div
                  v-if="candisplay3"
                  class="displayBar"
                  @click="changedisplay3"
                >
                  显示代码
                </div>
              </a>
              <div v-if="display3">
                <!-- 代码区 -->
                <textarea
                  class="daimaqu"
                  readonly="value"
                  v-model="text3"
                  style="height: 300px"
                >
                </textarea>
                <div class="displayBar" @click="disChange3">隐藏代码</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display1: false,
      candisplay1: true,
      display2: false,
      candisplay2: true,
      display3: false,
      candisplay3: true,
      text1:
        ' \n \n <lch-row>\n   <lch-button>button</lch-button>\n   <lch-button type="primary">primary</lch-button>\n   <lch-button type="info">info</lch-button>\n   <lch-button type="success">success</lch-button>\n   <lch-button type="warning">warning</lch-button>\n   <lch-button type="danger">danger</lch-button>\n </lch-row>\n <lch-row>\n   <lch-button plain>button</lch-button>\n   <lch-button type="primary" plain>primary</lch-button>\n   <lch-button type="info" plain>info</lch-button>\n   <lch-button type="success" plain>success</lch-button>\n   <lch-button type="warning" plain>warning</lch-button>\n   <lch-button type="danger" plain>danger</lch-button>\n </lch-row>\n ',
      text2:
        ' \n \n <lch-row>\n   <lch-button round>button</lch-button>\n   <lch-button type="primary" round>primary</lch-button>\n   <lch-button type="info" round>info</lch-button>\n   <lch-button type="success" round>success</lch-button>\n   <lch-button type="warning" round>warning</lch-button>\n   <lch-button type="danger" round>danger</lch-button>\n </lch-row>\n <lch-row>\n   <lch-button circle icon="lch-icon-Aa"></lch-button>\n   <lch-button type="primary" circle icon="lch-icon-zhinanzhen"></lch-button>\n   <lch-button type="info" circle icon="lch-icon-guanbi"></lch-button>\n   <lch-button type="success" circle icon="lch-icon-search"></lch-button>\n   <lch-button type="warning" circle icon="lch-icon-search"></lch-button>\n   <lch-button type="danger" circle icon="lch-icon-app4"></lch-button>\n </lch-row>\n ',
      text3:
        ' \n \n <lch-row>\n   <lch-button disabled>button</lch-button>\n   <lch-button type="primary" disabled>primary</lch-button>\n   <lch-button type="info" disabled>info</lch-button>\n   <lch-button type="success" disabled>success</lch-button>\n   <lch-button type="warning" disabled>warning</lch-button>\n   <lch-button type="danger" disabled>danger</lch-button>\n </lch-row>\n <lch-row>\n   <lch-button icon="lch-icon-Aa">button</lch-button>\n   <lch-button type="primary" icon="lch-icon-zhinanzhen">primary</lch-button>\n   <lch-button type="info" icon="lch-icon-guanbi">info</lch-button>\n   <lch-button type="success" icon="lch-icon-search">success</lch-button>\n   <lch-button type="warning" icon="lch-icon-search">warning</lch-button>\n   <lch-button type="danger" icon="lch-icon-app4">danger</lch-button>\n </lch-row>\n ',
    };
  },
  methods: {
    changedisplay1() {
      this.display1 = true;
      this.candisplay1 = false;
    },
    disChange1() {
      this.display1 = false;
      this.candisplay1 = true;
    },
    changedisplay2() {
      this.display2 = true;
      this.candisplay2 = false;
    },
    disChange2() {
      this.display2 = false;
      this.candisplay2 = true;
    },
    changedisplay3() {
      this.display3 = true;
      this.candisplay3 = false;
    },
    disChange3() {
      this.display3 = false;
      this.candisplay3 = true;
    },
  },
};
</script>

<style></style>
