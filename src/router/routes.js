//所有路由匹配的数组

import Home from '../pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Register from '@/pages/Register'


export default [
    {
        path: '/',
        component: Home
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        /*  props: true *///只映射params参数
        props: (route) => ({ keyword3: route.params.keyword, keyword4: route.query.keyword2 })

    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }
]
