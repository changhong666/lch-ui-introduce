<template>
  <div>
    <div>
      <div style="padding-top: 20px">
        <h1>Switch-开关</h1>
        <div style="padding-top: 20px">
          <a style="color: #5e6d82"
            >表示两种相互对立的状态间的切换，多用于触发「开/关」。</a
          >
        </div>
      </div>
      <div style="width: 760px; padding-top: 20px">
        <div style="padding-bottom: 20px">
          <h2>基础用法</h2>
        </div>
        <!-- 基础用法 -->
        <div class="componentInc">
          <div class="xiangge">
            <h3>普通开关</h3>
            <div class="xiangge">
              <lch-switch v-model="value1"></lch-switch>
            </div>
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
        <!-- 更改颜色 -->
        <div style="padding-bottom: 20px">
          <h2>自定义用法</h2>
          <div style="padding-top: 20px">
            <a style="color: #5e6d82"
              >使用active-colo、inactive-color属性来定义 Switch 的样式。</a
            >
          </div>
        </div>
        <div class="componentInc">
          <div class="xiangge">
            <h3>更改颜色开关</h3>
            <div class="xiangge">
              <lch-switch
                style="display: block"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </lch-switch>
            </div>
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
      text1:
        '\n\n  <lch-switch \n    v-model="value1">\n  </lch-switch>\n\n\n  <script>\n    export default {\n      data() {\n        return {\n          value1: true\n        }\n      }\n    };\n ' +
        " </scrip>",
      value1: true,
      value2: true,
      text2:
        '\n\n  <lch-switch \n    v-model="value2"\n    active-color="#13ce66"\n    inactive-color="#ff4949">\n  </lch-switch>\n\n\n  <script>\n    export default {\n      data() {\n        return {\n          value2: true\n        }\n      }\n    };\n ' +
        " </scrip>",
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
  },
};
</script>

<style></style>
