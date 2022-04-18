<template>
  <div>
    <div>
      <div style="padding-top: 20px">
        <h1>CheckBox-多选框</h1>
        <div style="padding-top: 20px">
          <a style="color: #5e6d82">在一组备选项中进行多选</a>
        </div>
      </div>
      <div style="width: 760px; padding-top: 20px">
        <div style="padding-bottom: 20px">
          <h2>基础用法</h2>
          <div style="padding-top: 20px">
            <a style="color: #5e6d82">单独使用可以表示两种状态之间的切换。</a>
          </div>
        </div>
        <!-- 基础用法 -->
        <div class="componentInc">
          <div class="xiangge">
            <h3>普通多选框</h3>
            <div class="xiangge">
              <lch-checkbox v-model="check1" label="1">默认项</lch-checkbox>
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
          <h2>多选框组</h2>
          <div style="padding-top: 20px">
            <a style="color: #5e6d82">适用于在多个选项中选择的场景</a>
          </div>
        </div>
        <div class="componentInc">
          <div class="xiangge">
            <h3>多选框组</h3>
            <div class="xiangge">
              <lch-checkbox-group v-model="check2">
                <lch-checkbox label="3">备选项</lch-checkbox>
                <lch-checkbox label="6">备选项</lch-checkbox>
                <lch-checkbox label="9">备选项</lch-checkbox>
              </lch-checkbox-group>
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
      check1: "1",
      check2: ["3", "6"],
      display1: false,
      candisplay1: true,
      display2: false,
      candisplay2: true,
      text1:
        '\n\n  <lch-checkbox v-model="check1" label="1">默认项</lch-checkbox>\n \n\n\n  <script>\n    export default {\n      data() {\n        return {\n          check1: "1"\n        }\n      }\n    };\n ' +
        " </scrip>",
      value1: true,
      value2: true,
      text2:
        '\n\n  <lch-checkbox-group v-model="check2"> \n    <lch-checkbox label="3">备选项</lch-checkbox>\n    <lch-checkbox label="6">备选项</lch-checkbox>\n    <lch-checkbox label="9">备选项</lch-checkbox>\n  </lch-checkbox-group>\n \n\n\n  <script>\n    export default {\n      data() {\n        return {\n          check2: ["3","6"]\n        }\n      }\n    };\n ' +
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
