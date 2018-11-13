<template>
    <div>
        <Xheader status="detail" />
        <XdetailCard />
        <Xtab />
        <Xgallery />
    </div>
</template>
<script>
import Xheader from '../components/Xheader.vue';
import XdetailCard from '../components/XdetailCard.vue';
import Xtab from '../components/Xtab.vue';
import Xgallery  from '../components/Xgallery.vue';
export default {
    components: {
        Xheader,
        XdetailCard,
        Xtab,
        Xgallery
    }
}
</script>

<style scoped>
</style>