<template>
  <div>
    <div>
      <div style="padding-top: 20px">
        <h1>Toast-弹窗</h1>
        <div style="padding-top: 20px">
          <a style="color: #5e6d82">屏幕弹出提示信息</a>
        </div>
      </div>
      <div style="width: 760px; padding-top: 20px">
        <div style="padding-bottom: 20px">
          <h2>基础用法</h2>
          <div style="padding-top: 20px">
            <a style="color: #5e6d82">弹出信息</a>
          </div>
        </div>
        <!-- 基础用法 -->
        <div class="componentInc">
          <div class="xiangge">
            <h3>自动关闭</h3>
            <div class="xiangge">
              <span class="xiangge" @click="showToast1"
                ><lch-button>顶部信息</lch-button></span
              >
              <span class="xiangge" @click="showToast2"
                ><lch-button>中部信息</lch-button></span
              >
              <span class="xiangge" @click="showToast3"
                ><lch-button>底部信息</lch-button></span
              >
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
          <h2>手动关闭</h2>
          <div style="padding-top: 20px">
            <a style="color: #5e6d82">手动关闭弹出信息</a>
          </div>
        </div>
        <div class="componentInc">
          <div class="xiangge">
            <h3>手动关闭</h3>
            <div class="xiangge">
              <span class="xiangge" @click="showToast4"
                ><lch-button>顶部信息</lch-button></span
              >
              <span class="xiangge" @click="showToast5"
                ><lch-button>中部信息</lch-button></span
              >
              <span class="xiangge" @click="showToast6"
                ><lch-button>底部信息</lch-button></span
              >
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

        <div style="padding-bottom: 20px">
          <h2>自定义关闭</h2>
          <div style="padding-top: 20px">
            <a style="color: #5e6d82">自定义关闭弹出信息</a>
          </div>
        </div>
        <div class="componentInc">
          <div class="xiangge">
            <h3>自定义关闭</h3>
            <div class="xiangge">
              <span class="xiangge" @click="showToast7"
                ><lch-button>自定义关闭文字</lch-button></span
              >
              <span class="xiangge" @click="showToast8"
                ><lch-button>关闭后执行的函数</lch-button></span
              >
              <span class="xiangge" @click="showToast9"
                ><lch-button>底部信息</lch-button></span
              >
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
      text1: "",
      value1: true,
      value2: true,
      value3: true,
      text2: "",
      text3: "",
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
    showToast1() {
      this.$toast("默认信息");
    },
    showToast2() {
      this.$toast("中部信息", { position: "middle" });
    },
    showToast3() {
      this.$toast("底部信息", { position: "bottom" });
    },
    showToast4() {
      this.$toast("顶部信息", { isCloseButton: true });
    },
    showToast5() {
      this.$toast("中部信息", { position: "middle", isCloseButton: true });
    },
    showToast6() {
      this.$toast("底部信息", { position: "bottom", isCloseButton: true });
    },
    showToast7() {
      this.$toast("自定义关闭文字", {
        isCloseButton: true,
        closeButton: { text: "点击我关闭Toast" },
      });
    },
    showToast8() {
      this.$toast("关闭后执行回调函数", {
        isCloseButton: true,
        closeButton: {
          text: "关闭后执行 alert('已经关闭了')",
          callback: () => {
            window.alert("已经关闭了");
          },
        },
      });
    },
    showToast9() {
      this.$toast("2s后自动关闭", {
        isCloseButton: true,
        autoClose: 2,
      });
    },
  },
};
</script>

<style></style>
