import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import Home from "./container/Home.vue";
import Search from "./container/Search.vue";
import Sign from "./container/Sign.vue";
import Detail from "./container/Detail.vue";
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。

// 二级路由
import Homechannel from "./container/Homechannel.vue";
import DetailChannel from "./container/DetailChannel.vue";
const routes = [{
        path: '/home',
        name: 'home',
        component: Home,

        children: [{
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'hot',
                name: 'hot',
                component: Homechannel,
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'fresh',
                name: 'fresh',
                component: Homechannel,
            }
        ]

    },
    { path: '/search', name: 'search', component: Search },
    { path: '/sign', name: 'sign', component: Sign },
    {
        path: '/detail',
        name: 'detail',
        component: Detail,
        children: [{
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'repost',
                name: 'repost',
                component: DetailChannel,
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'comment',
                name: 'comment',
                component: DetailChannel,
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'like',
                name: 'like',
                component: DetailChannel
            }
        ]
    },

    { path: '/', redirect: { name: 'hot' } }

]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes

})

// =======vuex


const store = new Vuex.Store({
    // ===初始状态===
    state: {
        gallery: {
            isShowGallery: false,
            galleryImg: [],
            index: 0
        },
        navs: [{
            title: "热门",
            path: "hot",
        }, {
            title: "新鲜事",
            path: "fresh",
        }, {
            title: "搞笑",
            path: "",
        }, {
            title: "情感",
            path: "",
        }, {
            title: "明星",
            path: "",
        }, {
            title: "社会",
            path: "",
        }, {
            title: "数码",
            path: "",
        }, {
            title: "体育",
            path: "",
        }, {
            title: "汽车",
            path: "",
        }, {
            title: "电影",
            path: "",
        }, {
            title: "游戏",
            path: "",
        },{
            title: "11",
            path: "",
        }]
    },
    // ===修改状态===
    mutations: {
        editGallery(state, data) {
            state.gallery = data;
        }
    },
    // ===actios 一般配合点击事件 @xxx触发===
    actions: {
        setGallery(conText, data) {
            conText.commit('editGallery', data);
        }
    },
    // ===组件从store(中介)手中拿数据，配合computed===

    getters: {
        getGallery: state => {
            return state.gallery
        },
        getNavs: state => {
            return state.navs
        }
    }

})












new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')