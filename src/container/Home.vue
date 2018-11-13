<template>
    <div>
        <Xheader status="home" />
        <router-view></router-view>
    </div>
</template>
<script>
import Xheader from '../components/Xheader.vue';

export default {
    name: 'app',
    components: {
        Xheader
    }
}
</script>