import Vue from 'vue'
import App from './App.vue'


//不显示非生产环境的提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
const a = 1
