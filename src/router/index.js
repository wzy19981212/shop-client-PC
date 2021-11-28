import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes'

//声明使用
Vue.use(VueRouter)


//缓存原本的push方法
const originalPush = VueRouter.prototype.push
const originalreplace = VueRouter.prototype.replace
//指定新的push方法
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    console.log('push');
    if (onResolve || onReject) {
        //直接调用原本push方法
        //如果直接调用函数的话 this指向是windows也就是underfind 我们要的是指向router
        return originalPush.call(this, location, onResolve, onReject)
    }
    return originalPush.call(this, location).catch((err) => {
        if (VueRouter.isNavigationFailure(err)) {
            // resolve err
            return err
        }
        // rethrow error
        return Promise.reject(err)
    })
}
VueRouter.prototype.replace = function (location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalreplace.call(this, location, onResolve, onReject)
    }
    return originalreplace.call(this, location).catch((err) => {
        if (VueRouter.isNavigationFailure(err)) {
            // resolve err
            return err
        }
        // rethrow error
        return Promise.reject(err)
    })
}

//暴露
export default new VueRouter({
    //模式
    mode: 'history',//不带#号
    routes

})