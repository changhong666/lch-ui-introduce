<template>
  <div>
    <div>
      <div style="padding-top: 20px">
        <h1>Input-输入框</h1>
        <div style="padding-top: 20px">
          <a style="color: #5e6d82">用户通过鼠标或键盘输入字符</a>
        </div>
      </div>
      <div style="width: 760px; padding-top: 20px">
        <div style="padding-bottom: 20px">
          <h2>基础用法</h2>
          <div style="padding-top: 20px">
            <a style="color: #5e6d82">通过鼠标或键盘输入字符</a>
          </div>
        </div>
        <!-- 基础用法 -->
        <div class="componentInc">
          <div class="xiangge">
            <h3>普通输入框</h3>
            <div class="xiangge">
              <lch-input placeholder="请输入内容" v-model="text"></lch-input>
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
                style="height: 320px"
              >
              </textarea>
              <div class="displayBar" @click="disChange1">隐藏代码</div>
            </div>
          </div>
        </div>

        <div style="padding-bottom: 20px">
          <h2>可清除输入框</h2>
          <div style="padding-top: 20px">
            <a style="color: #5e6d82">通过鼠标或键盘输入字符，可以快速清除</a>
          </div>
        </div>
        <!-- 基础用法 -->
        <div class="componentInc">
          <div class="xiangge">
            <h3>可清除输入框</h3>
            <div class="xiangge">
              <lch-input
                placeholder="请输入内容"
                type="text"
                name="username"
                v-model="username"
                clearable
              ></lch-input>
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
                style="height: 320px"
              >
              </textarea>
              <div class="displayBar" @click="disChange2">隐藏代码</div>
            </div>
          </div>
        </div>
        <!-- 更改颜色 -->
        <div style="padding-bottom: 20px">
          <h2>密码输入框</h2>
          <div style="padding-top: 20px">
            <a style="color: #5e6d82">适用于密码输入框</a>
          </div>
        </div>
        <div class="componentInc">
          <div class="xiangge">
            <h3>密码输入框</h3>
            <div class="xiangge">
              <lch-input
                placeholder="请输入密码"
                v-model="password"
                type="password"
                show-password
              ></lch-input>
            </div>
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
                style="height: 320px"
              >
              </textarea>
              <div class="displayBar" @click="disChange3">隐藏代码</div>
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
      text: "",
      username: "",
      password: "",

      display1: false,
      candisplay1: true,
      display2: false,
      candisplay2: true,
      display3: false,
      candisplay3: true,
      text1:
        '\n\n  <lch-input v-model="text"></lch-input>\n \n\n\n  <script>\n    export default {\n      data() {\n        return {\n          text: ""\n        }\n      }\n    };\n ' +
        " </scrip>",

      text2:
        '\n\n  <lch-input\n    v-model="username"\n    placeholder="请输入内容"\n    type="text"\n    clearable\n  ></lch-input>\n \n\n\n  <script>\n    export default {\n      data() {\n        return {\n          username: ""\n        }\n      }\n    };\n ' +
        " </scrip>",
      text3:
        '\n\n  <lch-input\n    v-model="password"\n    placeholder="请输入密码"\n    type="password"\n    show-password\n  ></lch-input>\n \n\n\n  <script>\n    export default {\n      data() {\n        return {\n          password: ""\n        }\n      }\n    };\n ' +
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
