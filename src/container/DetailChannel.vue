<template>
    <div>
        <XtabCard :channel="channel" />
    </div>
</template>
<script>
import XtabCard from '../components/XtabCard.vue';
export default {
    components: {
        XtabCard
    },
    data() {
        return {
            channel: 0
        };
    },
    methods: {
        setChannel() {
            var route = this.$router.history.current.path;
            switch (route) {
                case "/detail/repost":
                    this.channel = 0;
                    break;
                case "/detail/comment":
                    this.channel = 1;
                    break;
                case "/detail/like":
                    this.channel = 2;
                    break;
                default:
                    this.channel = 0;
            };
        }
    },
    mounted() {
        this.setChannel();

    },
    watch: {
        $route() {
            this.setChannel();
        }
    }
}
</script>
<style scoped>
</style>