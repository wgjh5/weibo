<template>
    <div>
        <div v-if="status=='home'" class="lite-topbar main-top">
            <div class="nav-top">
                <div class="nav-left unlogin-logo"></div>
                <a  href="#/search" class="nav-search unlogin-search">
     <aside >
      <label  class="m-search"><i  class="m-font m-font-search"></i> 
       <div  class="m-text-cut">
         大家都在搜：公交坠江发现9名遇难者
       </div></label>
     </aside></a>
                <div @click="publish" class="nav-right">
                    <div class="lite-iconf lite-iconf-releas"></div>
                </div>
            </div>
            <div class="nav-main">
                <div class="m-box">
                    <div class="m-box-col inner-box">
                        <div class="scroll-box slide-container">
                            <div class="slide-wrap">
                                <ul class="nav_item">
                                    <li @click="changeNav(index)" v-for="(n,index) in navs" class="item_li " :class="{
         cur:nav==index
         }"><span > {{n.title}} <em ></em></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Xbox v-show="isShowXbox" />
                    </div>
                    <div @click="toggleXbox" class="nav-plus m-box-center m-box-center-a">
                        <i class="m-font m-font-arrow-down"></i>
                    </div>
                </div>
            </div>
        </div>
        <!--search-->
        <div v-if="status=='search'" class="ntop-nav">
            <div class="m-box-center-a">
                <div class="nt-box-col m-box-center-a">
                    <div class="nt-left" @click="back"><i  class="m-font m-font-arrow-left"></i></div>
                    <div class="m-box-col m-box-center-a nt-sbox">
                        <form action="." class="nt-search"><i  class="m-font m-font-search"></i> <input type="search" placeholder="大家都在搜：梅西手骨折还被安排乒乓球">
                            <!---->
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!--detail-->
        <div v-if="status=='detail'" class="lite-topbar lite-page-top">
            <div @click="back" class="nav-left"><i class="m-font m-font-arrow-left"></i></div>
            <div class="nav-main"><h4>微博正文</h4>
            </div>
            <div class="nav-right"><i class="m-font m-font-dot-more"></i></div>
        </div>
    </div>
</template>
<script>
import Xbox from './Xbox.vue';
import setChannel from '../lib/setChannel.js';
export default {
    props: ["status"],
    data() {
        return {
            // 切换box
            isShowXbox: false,
            nav: 0,
            news: []
        }
    },

    computed: {
        navs() {
            return this.$store.getters.getNavs
        }

    },
    methods: {
        changeNav(nav) {
            this.nav = nav;
            this.$router.push({ name: this.navs[nav].path });
        },
        //发布内容，如果没登录的话，跳转到登录页面
        publish() {
            this.$router.push({ name: 'sign' });
        },

        back() {
            this.$router.history.go(-1);
        },
        // 切换Xbox
        toggleXbox() {
            this.isShowXbox = !this.isShowXbox;
        },
        setChannel
    },
    mounted() {
        this.setChannel("nav")
    },
    components: {
        Xbox
    }

};
</script>
<style scoped>
@import url("../assets/app.css");

/*# sourceMappingURL=app.8ed5376b.css.map */

@charset "UTF-8";

.ntop-nav {
    height: 44px;
    background-color: #fff;
    -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
}

.ntop-nav>.m-box-center-a {
    height: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 0.625rem;
}

.nt-box-col {
    -webkit-flex-basis: auto;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
}

.nt-sbox {
    height: 28px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    background-color: #e3e4e6;
}

.nt-search {
    position: relative;
    width: 100%;
}

.nt-search {
    -webkit-flex-basis: auto;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.nt-search .m-font-search {
    padding-left: 10px;
    padding-right: 8px;
    color: #8e8e93;
}

.nt-search input {
    background-color: transparent;
    border: 0px none;
    font-size: 0.875rem;
    color: #333333;
    width: 100%;
    margin-right: 2rem;
}

.nt-search input[type=search]::-webkit-search-cancel-button {
    -webkit-appearance: none;
}

.nt-left {
    padding-right: 1.1875rem;
    cursor: pointer;
}

.nt-left .m-font {
    color: #606060;
    font-weight: bold;
}

.nt-right {
    padding-left: 0.75rem;
    cursor: pointer;
}

.nt-icon-pub {
    width: 1.875rem;
    height: 1.875rem;
    background-image: url(https://h5.sinaimg.cn/upload/1005/16/2018/02/09/publish.png);
    background-repeat: no-repeat;
    -moz-background-size: contain;
    background-size: contain;
    display: inline-block;
}

.icon-cross {
    width: .875rem;
    height: .875rem;
    background: #cac8c8;
    color: #fff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    /*方便相对于父元素进行定位*/
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    bottom: 0;
    right: 10px;
}

.icon-cross::before,
.icon-cross::after {
    content: "";
    position: absolute;
    background: #f7f7f7;
    height: .5rem;
    width: .0625rem;
    top: .1875rem;
    right: .375rem;
}

.icon-cross::before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    /*进行旋转*/
}

.icon-cross::after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
</style>