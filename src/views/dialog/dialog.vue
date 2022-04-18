<template>
  <div>
    <div>
      <div style="padding-top: 20px">
        <h1>Dialog-对话框</h1>
        <div style="padding-top: 20px">
          <a style="color: #5e6d82">事件触发对话框</a>
        </div>
      </div>
      <div style="width: 760px; padding-top: 20px">
        <div style="padding-bottom: 20px">
          <h2>点击弹出</h2>
          <div style="padding-top: 20px">
            <a style="color: #5e6d82">点击弹出对话框</a>
          </div>
        </div>
        <!-- 基础用法 -->
        <div class="componentInc">
          <div class="xiangge">
            <h3>点击弹出对话框</h3>
            <div class="xiangge">
              <div class="xiangge">
                <lch-button @click="showDialog">点击弹出对话框</lch-button>
              </div>
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
      </div>
    </div>
    <lch-dialog width="60%" top="100px" :visible.sync="visible">
      <template v-slot:title>
        <h4>对话框</h4>
      </template>
      <div>可以嵌套其他组件</div>
      <template v-slot:footer>
        <lch-button type="primary" @click="visible = false">关闭</lch-button>
      </template>
    </lch-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      display1: false,
      candisplay1: true,
      display2: false,
      candisplay2: true,
      text1: "",
      value1: true,
      value2: true,
      text2: "",
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
    showDialog() {
      this.visible = true;
    },
  },
};
</script>

<style></style>
