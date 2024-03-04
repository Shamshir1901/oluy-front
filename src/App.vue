<template>
    <HeaderRow/>
    <router-view/>
    <FooterRow/>
</template>


<script>
import {defineComponent} from "vue";

import HeaderRow from "@/components/HeaderRow.vue";
import MainRow from "@/components/MainRow.vue";
import FooterRow from "@/components/FooterRow.vue";

export default defineComponent({
    components: {FooterRow, HeaderRow, }
})
</script>


<style scoped>
</style>
