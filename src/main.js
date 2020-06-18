import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/store.js"; //vue下面会自动引入index.js
import "../public/iconfont/iconfont.css";

import { Button,Toast,Tabbar,NavBar,TabbarItem,AddressList,AddressEdit,Tab,Tabs,PullRefresh,List  } from 'vant'; //vant组件
Vue.use(Button).use(Tabbar).use(NavBar).use(TabbarItem).use(AddressList).use(AddressEdit).use(Tab).use(Tabs);
Vue.use(PullRefresh).use(List);
Vue.prototype.$Toast = Toast; //全局继承调用，原型链继承后不需要use

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
