import Vue from 'vue'
import App from './App.vue'
//引入路由器
import router from './router'


//不显示非生产环境的提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router//注册路由器所有组件都可以访问两个对象，$touter,,$route
}).$mount('#app')

