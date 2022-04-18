<template>
  <div>
    <div>
      <div style="padding-top: 20px">
        <h1>From-表单</h1>
        <div style="padding-top: 20px">
          <a style="color: #5e6d82"
            >由输入框、选择器、单选框、多选框等控件组成</a
          >
        </div>
      </div>
      <div style="width: 760px; padding-top: 20px">
        <div style="padding-bottom: 20px">
          <h2>基础用法</h2>
          <div style="padding-top: 20px">
            <a style="color: #5e6d82"
              >由输入框、选择器、单选框、多选框等控件组成基本表单</a
            >
          </div>
        </div>
        <!-- 基础用法 -->
        <div class="componentInc">
          <div class="xiangge">
            <div class="xiangge">
              <lch-form :model="formModel">
                <lch-form-item label="用户名">
                  <lch-input
                    v-model="formModel.username"
                    clearable
                    placeholder="请输入用户名"
                  ></lch-input>
                </lch-form-item>
                <lch-form-item label="密码">
                  <lch-input
                    v-model="formModel.password"
                    placeholder="请输入密码"
                    type="password"
                    show-password
                  ></lch-input>
                </lch-form-item>

                <lch-form-item label="开关">
                  <lch-switch v-model="formModel.active"></lch-switch>
                </lch-form-item>
                <lch-form-item label="多选框">
                  <lch-checkbox-group v-model="formModel.check">
                    <lch-checkbox label="3">备选项</lch-checkbox>
                    <lch-checkbox label="6">备选项</lch-checkbox>
                    <lch-checkbox label="9">备选项</lch-checkbox>
                  </lch-checkbox-group>
                </lch-form-item>
                <lch-form-item label="单选框">
                  <lch-radio v-model="formModel.radio" label="1"
                    >默认项</lch-radio
                  >
                  <lch-radio v-model="formModel.radio" label="2"
                    >备选项</lch-radio
                  >
                </lch-form-item>
                <lch-form-item style="padding-left: 120px">
                  <lch-button type="primary">提交</lch-button>
                  <lch-button style="margin-left: 20px">重置</lch-button>
                </lch-form-item>
              </lch-form>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formModel: {
        username: "",
        active: true,
        password: "",
        check: ["3", "6"],
        radio: 3,
      },
      display1: false,
      candisplay1: true,
      text1:
        '\n\n  <lch-checkbox v-model="check1" label="1">默认项</lch-checkbox>\n \n\n\n  <script>\n    export default {\n      data() {\n        return {\n          check1: "1"\n        }\n      }\n    };\n ' +
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
  },
};
</script>

<style></style>
