<template>
    <div v-show="gallery.isShowGallery" tabindex="-1" role="dialog" aria-hidden="false" class="pswp pswp--supports-fs pswp--open pswp--animate_opacity pswp--touch pswp--css_animation pswp--svg pswp--visible pswp--animated-in" style="position: fixed; opacity: 1;">
        <div class="pswp__bg" style="opacity: 1;"></div>
        <div class="pswp__scroll-wrap">
            <div class="pswp__container" style="transform: translate3d(0px, 0px, 0px);">
                <div class="pswp__item" style="display: block; transform: translate3d(-420px, 0px, 0px);"></div>
                <div class="pswp__item" style="transform: translate3d(0px, 0px, 0px);">
                    <div class="pswp__zoom-wrap" style="transform: translate3d(0px, 193px, 0px) scale(1);"><img class="pswp__img pswp__img--placeholder" src="https://wx4.sinaimg.cn/orj360/005F4Uyxgy1fwth6xk99pj31400u0dlt.jpg" style="width: 375px; height: 281px; display: none;"><img class="pswp__img" src="https://wx4.sinaimg.cn/large/005F4Uyxgy1fwth6xk99pj31400u0dlt.jpg" style="display: block; width: 375px; height: 281px;"></div>
                    </div>
                    <div class="pswp__item" style="display: block; transform: translate3d(420px, 0px, 0px);">
                        <div class="pswp__zoom-wrap" style="transform: translate3d(0px, 193px, 0px) scale(1);"><img class="pswp__img pswp__img--placeholder" src="https://wx3.sinaimg.cn/orj360/005F4Uyxgy1fwth6yfx7mj31400u0dli.jpg" style="width: 375px; height: 281px; display: none;"><img class="pswp__img" src="https://wx3.sinaimg.cn/large/005F4Uyxgy1fwth6yfx7mj31400u0dli.jpg" style="width: 375px; height: 281px;"></div>
                        </div>
                    </div>
                    <div class="pswp__ui">
                        <div class="pswp__top-bar">
                            <div class="pswp__counter">1 / 4</div>
                            <button @click="hideGallery" title="Close (Esc)" class="pswp__button pswp__button--close"></button>
                            <!--<div class="m-guide m-guide-hide">
                                长按保存哦！
                                <span  class="m-arr-top"></span></div> <a  target="_blank" title="Toggle fullscreen" class="pswp__button pswp__button--fs button-save"><i  class="m-font m-font-download"></i> <img  class="save-img" src="https://wx4.sinaimg.cn/large/005F4Uyxgy1fwth6xk99pj31400u0dlt.jpg"></a> <button title="Zoom in/out" class="pswp__button pswp__button--zoom"></button>
                            <div class="pswp__preloader">
                                <div class="pswp__preloader__icn">
                                    <div class="pswp__preloader__cut">
                                        <div class="pswp__preloader__donut"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                            <div class="pswp__share-tooltip"></div>
                        </div> <button title="Previous (arrow left)" class="pswp__button pswp__button--arrow--left"></button> <button title="Next (arrow right)" class="pswp__button pswp__button--arrow--right"></button>
                        <div class="pswp__caption pswp__caption--empty">
                            <div class="pswp__caption__center"></div>-->
                        </div>
                    </div>
                </div>
            </div>
</template>
<script>
export default {
    computed: {
        gallery() {
            return this.$store.getters.getGallery
        }

    },
    methods: {
        hideGallery() {
            this.$store.dispatch('setGallery', {
                isShowGallery: false,
                galleryImg: [],
                index: 0

            })
        }
    }

}
</script>