<template>
    <div class="lite-nav-sublist m-col-4">
        <ul class="m-auto-list">
            <li class="m-auto-box" v-for="(n,index) in navs"><span  class="m-text-cut" v-text="n.title"></span></li>
        </ul>
    </div>
</template>
<script>
export default {
    computed: {
        navs() {
            return this.$store.getters.getNavs
        }
    }
}
</script>