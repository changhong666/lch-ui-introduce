<template>
  <div>
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      @tab-remove="removeTab"
      @tab-click="tabClick"
    >
      <el-tab-pane
        v-for="(item, index) in editableTabs"
        :key="index"
        :closable="item.name != 'mainPage'"
        :label="item.title"
        :name="item.name"
      >
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "mainTag",
  data() {
    return {
      editableTabsValue: "主页",
      editableTabs: [],
      tabIndex: 2,
    };
  },
  watch: {
    $route() {
      // this.defaultactive = this.$route.path
      // console.log(this.$route)
      this.getActiveMenu(this.$route);
    },
  },
  mounted() {
    this.getActiveMenu(this.$route);
  },
  methods: {
    getActiveMenu(param) {
      let tagArr = JSON.parse(sessionStorage.getItem("tagArr"));
      if (tagArr) {
        if (param.path != "/") {
          this.editableTabs = tagArr;
          let pathName = param.path;
          let arr = pathName.split("/");
          let isFind = false;
          tagArr.forEach((ele) => {
            if (ele.name == arr[1]) {
              isFind = true;
            }
          });
          if (!isFind) {
            this.editableTabs.push({ title: param.meta.title, name: arr[1] });
            this.editableTabsValue = arr[1];
            sessionStorage.setItem("tagArr", JSON.stringify(this.editableTabs));
          } else {
            this.editableTabsValue = arr[1];
          }
        }
      } else {
        this.editableTabs = [
          {
            title: "主页",
            name: "mainPage",
          },
        ];
        this.editableTabsValue = "mainPage";
        sessionStorage.setItem("tagArr", JSON.stringify(this.editableTabs));
      }
    },
    tabClick(tagDic) {
      this.$router.push("/" + tagDic.name);
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
      sessionStorage.setItem("tagArr", JSON.stringify(this.editableTabs));
      this.$router.push("/" + activeName);
    },
  },
};
</script>

<style scoped></style>
