<template>
    <div>
        <div id="gao" style="margin-top: 84px;"></div>
        <Xlist />
    </div>
</template>
<script>
import Xlist from '../components/Xlist.vue';
import setChannel from '../lib/setChannel.js';
export default {
    data() {
        return {

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
            }],
            channel: 0
        };
    },
    components: {
        Xlist
    },
    methods: {
        setChannel
    },
    mounted() {
        this.setChannel("channel");

    },
    watch: {
        $route() {
            this.setChannel("channel");
        }
    }

}
</script>