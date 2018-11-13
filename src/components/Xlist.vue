<template>
    <div style="transform: translateY(-34px); transition-duration: 0s;">
        <div class="m-tips m-tips-tp">
            <i class="m-font m-font-down m-font-down-ani"></i>
            <span class="main-link">下拉刷新</span>
        </div>
        <div class="pannelwrap" style="padding-top: 0px; padding-bottom: 0px;">
            <div class="wb-item-wrap">
                <div class="wb-item">
                    <!---->
                </div>
            </div>
            <div v-for="item in aa" class="wb-item-wrap"  @click="toDetailPage">
                <div class="wb-item">
                    <div class="card m-panel card9 f-weibo">
                        <div class="card-wrap">
                            <!---->
                            <header class="weibo-top m-box">
                                <div class="m-avatar-box m-box-center">
                                    <a href="/profile/1867099473" class="m-img-box"><img :src="item.mblog.user.profile_image_url" /> <i class="m-icon m-icon-goldv-static"></i></a>
                                </div>
                                <div class="m-box-dir m-box-col m-box-center">
                                    <div class="m-text-box">
                                        <a href="/profile/1867099473" class=""><h3 class="m-text-cut" v-text="item.mblog.user.screen_name"> 
             <!----> <i class="m-icon m-icon-vipl6"></i></h3></a>
                                        <h4 class="m-text-cut"><span class="time">21小时前</span> <span class="from"> 来自 iPhone客户端</span> 
            <!----></h4>
                                    </div>
                                </div>
                                <div callback="follow()" class="m-add-box m-followBtn">
                                    <span class="m-add-box"><i class="m-font m-font-plus"></i> <h4>关注</h4></span>
                                </div>
                            </header>
                        </div>
                        <article class="weibo-main">
                            <div class="card-wrap">
                                <div class="weibo-og">
                                    <div class="weibo-text" v-html="item.mblog.text">
                                        <a href="/status/4300579394356648">全文</a>
                                    </div>
                                    <div>
                                        <div class="weibo-media-wraps weibo-media f-media media-b">
                                            <ul class="m-auto-list">
                                                <li v-for="e in item.mblog.pics" class="m-auto-box2">
                                                    <div class="m-img-box m-imghold-4-3" style="width:100px;height:100px;">
                                                        <img :src="e.url" class="f-bg-img" />
                 </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!---->
                        </article>
                        <footer class="f-footer-ctrl">
                            <div class="m-diy-btn m-box-center-a">
                                <i class="lite-iconf lite-iconf-report"></i>
                                <h4>{{item.mblog.reposts_count}}</h4>
                            </div>
                            <div class="m-diy-btn m-box-center-a">
                                <i class="lite-iconf lite-iconf-comments"></i>
                                <h4>{{item.mblog.comments_count}}</h4>
                            </div>
                            <div class="m-diy-btn m-box-center-a">
                                <i class="lite-iconf lite-iconf-like"></i>
                                <h4>{{item.mblog.attitudes_count}}</h4>
                            </div>
                            <aside>
                                <i class="m-font m-font-dot-more"></i>
                            </aside>
                        </footer>
                    </div>
                </div>
                <!---->
                <div data-v-ca87902c="" class="m-tips m-tips-tp" style="display: none;">
                    <div data-v-ca87902c="" class="m-loading m-loading-dark">
                        <span data-v-ca87902c=""></span>
                        <span data-v-ca87902c=""></span>
                        <span data-v-ca87902c=""></span>
                        <span data-v-ca87902c=""></span>
                        <span data-v-ca87902c=""></span>
                        <span data-v-ca87902c=""></span>
                        <span data-v-ca87902c=""></span>
                        <span data-v-ca87902c=""></span>
                        <span data-v-ca87902c=""></span>
                        <span data-v-ca87902c=""></span>
                        <span data-v-ca87902c=""></span>
                        <span data-v-ca87902c=""></span>
                    </div>
                </div>
                <div class="temporary"></div>
                <div style="position: fixed;"></div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
//import Xheader from './components/Xheader.vue'
//var data;


export default {
  methods: {
        toDetailPage() {
            // 跳转详情页
            this.$router.push({ name: 'comment'});
        }
    },
    data() {
        return {

            aa: []
        }
    },
  
    mounted() {
        var self = this;
        axios.get('./getIndex.json')
            .then(function(response) {
                var data = response.data.data.cards;
                self.aa = data.slice(1);
                console.log(data);

                // console.log(response.data.data.cards);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

}
</script>
<style scoped>
@import url("../assets/card.css");
/**/
html,
body,
#app {
  height: 100%;
}
[v-cloak] {
  display: none;
}
.wb-item-wrap .card9.card {
  margin: 0;
}
.f-weibo .m-img-box {
  background-color: #e6e6e6;
}
.empty-bg {
  width: 100%;
  background-color: #e6e6e6;
  height: 0.375rem;
}
.inline-block {
  display: inline-block;
}
.txt-margin {
  margin: 0 0 1rem 0;
}
.width-min {
  width: 4.375rem;
}
.anim-load {
  animation: load 0.5s ease-out;
  -moz-animation: load 0.5s ease-out;
  -webkit-animation: load 0.5s ease-out;
  -o-animation: load 0.5s ease-out;
}
@keyframes load {
  0% {
    background-color: #fff;
  }
  100% {
    background-color: #e6e6e6;
  }
}
@-moz-keyframes load {
  0% {
    background-color: #fff;
  }
  100% {
    background-color: #e6e6e6;
  }
}
@-webkit-keyframes load {
  0% {
    background-color: #fff;
  }
  100% {
    background-color: #e6e6e6;
  }
}
.f-more {
  letter-spacing: 0.1rem;
}
.f-weibo .f-card-title {
  margin: -1rem -1rem 0.5rem -1rem;
  padding: 0 1rem;
  border-width: 0;
}
.f-weibo .m-avatar-box .m-img-box .m-icon {
  font-size: 14px;
}
.iosx3 .card9 .f-card-title {
  border-width: 0;
}
.iosx2 .card9 .f-card-title {
  border-width: 0;
}
.f-weibo.card9 {
  border-bottom: 1px solid #e6e6e6;
}
.iosx3 .f-weibo.card9 {
  border-bottom: 0.36px solid #e6e6e6;
}
.iosx2 .f-weibo.card9 {
  border-bottom: 0.5px solid #e6e6e6;
}
.f-weibo.card9 > .card-wrap {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}
.f-weibo.card9.m-panel {
  border-top-width: 0;
}
.f-weibo.card .card-wrap .f-col-wrap {
  padding: 0 0.9375rem;
}
.f-weibo.card9 .m-box-col {
  min-width: 0;
}
.f-weibo.card9 .weibo-top {
  padding: 0 0 0 0.25rem;
}
.f-weibo.card9 .weibo-top .m-box-col .m-icon {
  margin-left: 3px;
}
.f-weibo.card9 .weibo-main .weibo-og {
  padding: 0.75rem 0 0 0.25rem;
}
.f-weibo.card9 .weibo-main .card-wrap ~ .weibo-rp {
  margin-top: 0.5rem;
}
.f-weibo.card9 .weibo-main .media-b {
  margin: 0.625rem 0 -0.375rem;
}
.f-weibo.card9 .weibo-main .media-b .m-auto-list {
  margin: 0 0 -0.25rem;
}
.f-weibo .weibo-top .m-text-box {
  margin: 0.15rem 0 0.15rem 0.5rem;
}
.f-weibo .f-r {
  float: right;
}
.f-weibo .weibo-main .weibo-og {
  font-size: 0.9375rem;
}
.f-weibo .weibo-rp .weibo-text {
  font-size: 0.9375rem;
}
.f-weibo .weibo-rp .f-footer-ctrl {
  padding: 0.625rem 0 0;
}
.f-weibo .f-bg-img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
}
.f-footer-ctrl {
  border-top-width: 0;
  height: 1.1rem;
  padding: 1rem 0.375rem 1rem 0;
  margin: 0 0.75rem;
}
.f-footer-ctrl .m-diy-btn {
  color: rgba(40, 47, 60, 0.8);
  height: 100%;
  float: left;
}
.f-footer-ctrl .m-diy-btn + .m-diy-btn {
  margin-left: 1.6875rem;
}
.f-footer-ctrl .m-diy-btn .m-icon {
  font-size: 16px;
}
.f-footer-ctrl aside {
  float: right;
  color: rgba(40, 47, 60, 0.8);
}
.f-footer-ctrl .m-font {
  font-size: 1rem;
  vertical-align: middle;
}
.f-footer-ctrl .m-diy-btn h4 {
  font-size: 0.8125rem;
  display: inline-block;
  margin-top: 0;
  margin-left: 0.25rem;
}
</style>   