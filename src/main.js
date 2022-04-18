import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LchUI from "lch-cqupt-ui";
import "lch-cqupt-ui/dist/lch-ui.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/commond.css";
Vue.config.productionTip = false;

Vue.use(LchUI);
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
