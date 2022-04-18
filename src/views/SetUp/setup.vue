<template>
  <div>
    <div>
      <div style="padding-top: 20px">
        <h2>安装</h2>
      </div>
      <div style="width: 760px; padding: 20px">
        <div>
          <div style="padding-bottom: 20px">
            <h3>搭建Vue的开发环境</h3>
          </div>
          <div class="neirongkuang">
            <a style="margin: 0; font-size: 13px">vue create project-name</a>
          </div>
        </div>
        <div style="padding-top: 20px">
          如果你还没有安装vue-cli，请先安装
          <a
            href="https://cli.vuejs.org/zh/"
            style="text-decoration: none; color: #3eaf7c"
            target="_break"
            >vue-cli</a
          >
          ，再进行下一步。
        </div>
        <div style="padding-top: 20px">
          <div style="padding-bottom: 20px">
            <h3>安装 Lch-UI</h3>
          </div>
          <div class="neirongkuang">
            <a style="margin: 0; font-size: 13px; color: #f08d49">npm</a>
            <a style="margin: 0; font-size: 13px; color: #7ec699">
              i lch-cqupt-ui</a
            >
          </div>
        </div>
      </div>
      <div style="padding-top: 20px">
        <h2>环境配置</h2>
      </div>
      <div style="width: 760px; padding: 20px">
        <div>
          <div style="padding-bottom: 20px">
            <h3>main.js引入</h3>
          </div>
          <div class="neirongkuang">
            <div>
              <a style="margin: 0; font-size: 13px; color: #cc99cd"
                >import &nbsp;</a
              >

              <a style="margin: 0; font-size: 13px; color: #f08d49">
                LchUI from "lch-cqupt-ui"</a
              >;
            </div>
            <div>
              <a style="margin: 0; font-size: 13px; color: #cc99cd"
                >import &nbsp;</a
              >

              <a style="margin: 0; font-size: 13px; color: #f08d49">
                "element-ui/lib/theme-chalk/index.css"</a
              >;
            </div>
            <div>
              <a style="margin: 0; font-size: 13px; color: #7ec699">Vue</a>
              .<a style="margin: 0; font-size: 13px; color: #f08d49">use</a>
              (
              <a style="margin: 0; font-size: 13px; color: #7ec699"> LchUI</a>
              );
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.neirongkuang {
  position: relative;
  background-color: #282c34;
  border-radius: 6px;
  width: 666px;
  padding: 20px;
  color: #fff;
}
</style>
