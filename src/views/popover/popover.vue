<template>
  <div>
    <div>
      <div style="padding-top: 20px">
        <h1>Popover-弹出框</h1>
        <div style="padding-top: 20px">
          <a style="color: #5e6d82">弹出框，用于用户查看隐藏信息</a>
        </div>
      </div>
      <div style="width: 760px; padding-top: 20px">
        <div style="padding-bottom: 20px">
          <h2>点击弹出</h2>
          <div style="padding-top: 20px">
            <a style="color: #5e6d82">点击弹出提示框</a>
          </div>
        </div>
        <!-- 基础用法 -->
        <div class="componentInc">
          <div class="xiangge">
            <h3>点击弹出提示框</h3>
            <div class="xiangge">
              <lch-popover trigger="click" position="top" class="xiangge">
                <div slot="content">这是一段内容</div>
                <lch-button>点击上弹</lch-button>
              </lch-popover>
              <lch-popover trigger="click" position="bottom" class="xiangge">
                <div slot="content">这是一段内容</div>
                <lch-button>点击下弹</lch-button>
              </lch-popover>
              <lch-popover trigger="click" position="left" class="xiangge">
                <div slot="content">这是一段内容</div>
                <lch-button>点击左弹</lch-button>
              </lch-popover>
              <lch-popover trigger="click" position="right" class="xiangge">
                <div slot="content">这是一段内容</div>
                <lch-button>点击右弹</lch-button>
              </lch-popover>
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
          <h2>悬浮弹出</h2>
          <div style="padding-top: 20px">
            <a style="color: #5e6d82">悬浮弹出提示框</a>
          </div>
        </div>
        <div class="componentInc">
          <div class="xiangge">
            <h3>悬浮弹出</h3>
            <div class="xiangge">
              <lch-popover trigger="hover" position="top" class="xiangge">
                <div slot="content">这是一段内容</div>
                <lch-button>点击上弹</lch-button>
              </lch-popover>
              <lch-popover trigger="hover" position="bottom" class="xiangge">
                <div slot="content">这是一段内容</div>
                <lch-button>点击下弹</lch-button>
              </lch-popover>
              <lch-popover trigger="hover" position="left" class="xiangge">
                <div slot="content">这是一段内容</div>
                <lch-button>点击左弹</lch-button>
              </lch-popover>
              <lch-popover trigger="hover" position="right" class="xiangge">
                <div slot="content">这是一段内容</div>
                <lch-button>点击右弹</lch-button>
              </lch-popover>
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
  },
};
</script>

<style></style>
