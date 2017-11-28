
import Vue from 'vue'
import App from './App.vue'
import router from "./router.js";
// import store from "./store.js";
// import axios from "axios";
// Vue.prototype.$http = axios;

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI);





new Vue({
  el: '#app',
  router:router,
  // store:store,
  render: h => h(App)
})