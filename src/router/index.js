import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes'

//声明使用
Vue.use(VueRouter)

//暴露
export default new VueRouter({
    //模式
    mode: 'history',//不带#号
    routes

})