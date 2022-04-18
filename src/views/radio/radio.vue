<template>
  <div>
    <div>
      <div style="padding-top: 20px">
        <h1>Radio-单选框</h1>
        <div style="padding-top: 20px">
          <a style="color: #5e6d82">在一组备选项中进行单选</a>
        </div>
      </div>
      <div style="width: 760px; padding-top: 20px">
        <div style="padding-bottom: 20px">
          <h2>基础用法</h2>
          <div style="padding-top: 20px">
            <a style="color: #5e6d82">由于选项默认可见，不宜过多。</a>
          </div>
        </div>
        <!-- 基础用法 -->
        <div class="componentInc">
          <div class="xiangge">
            <h3>普通单选框</h3>
            <div class="xiangge">
              <lch-radio v-model="radio1" label="1">默认项</lch-radio>
              <lch-radio v-model="radio1" label="2">备选项</lch-radio>
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
          <h2>单选框组</h2>
          <div style="padding-top: 20px">
            <a style="color: #5e6d82">适用于在多个互斥的选项中选择的场景</a>
          </div>
        </div>
        <div class="componentInc">
          <div class="xiangge">
            <h3>单选框组</h3>
            <div class="xiangge">
              <lch-radio-group v-model="radio2">
                <lch-radio :label="3">备选项</lch-radio>
                <lch-radio :label="6">备选项</lch-radio>
                <lch-radio :label="9">备选项</lch-radio>
              </lch-radio-group>
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
      radio1: "1",
      radio2: 3,
      display1: false,
      candisplay1: true,
      display2: false,
      candisplay2: true,
      text1:
        '\n\n  <lch-radio v-model="radio1" label="1">默认项</lch-radio> \n  <lch-radio v-model="radio1" label="2">备选项</lch-radio>\n \n\n\n  <script>\n    export default {\n      data() {\n        return {\n          radio1: "1"\n        }\n      }\n    };\n ' +
        " </scrip>",
      value1: true,
      value2: true,
      text2:
        '\n\n  <lch-radio-group v-model="radio2"> \n    <lch-radio :label="3">备选项</lch-radio>\n    <lch-radio :label="6">备选项</lch-radio>\n    <lch-radio :label="9">备选项</lch-radio>\n  </lch-radio-group>\n \n\n\n  <script>\n    export default {\n      data() {\n        return {\n          radio2: 3\n        }\n      }\n    };\n ' +
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
