<template>
    <div item="[object Object]">
        <div class="lite-page-tab">
            <div class="tab-item"  v-for="(t,index) in tabs" :class="{
            cur:tab==index
            }" @click="changeTab(index)"><i v-html="`${t.title}<em ></em>`"></i> <i v-text="t.num"></i></div>
        </div>
        <div first-check="true" class="comment-content" style="margin-top: -1px; padding-bottom: 3.44rem;">
            <!---->
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
         tabs: [{
                title: "转发",
                path: "repost",
                num:37,
                isSelect:true
            }, {
                title: "评论",
                path: "comment",
                num:6,
                isSelect:true
            }, {
                title: "点赞",
                path: "like",
                num:268,
                isSelect:true
            }],
            tab: 1
        };
    },
    methods: {
        changeTab(tab) {
            this.tab = tab;
            this.$router.push({ name: this.tabs[tab].path });
        },
    }
}
</script>
<style scoped>
@import url("../assets/app.css");

.comment-con-img {
    display: block;
    max-width: 100px;
    /* width: 3.3125rem;
   height: 3.3125rem*/
}

.comment-con-img img {
    width: 100%;
    height: 100%;
    display: block;
}

.lite-page-list .m-text-box .cmt-sub-txt span {
    color: #333;
}

.lite-page-list .m-text-box .cmt-sub-txt p .m-font {
    font-size: 0.625rem;
}

.like-blog {
    margin-bottom: 0.5rem;
    font-size: 0.6875rem;
    color: #999;
}

.like-blog .lite-iconf {
    font-size: 0.6875rem;
}

.like-blog span {
    color: #999;
}

.lite-page-list .m-text-box .cmt-sub-txt .total {
    color: #507daf;
    cursor: pointer;
}
</style>