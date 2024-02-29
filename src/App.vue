<template>
    <HeaderRow/>
    <MainRow/>
</template>


<script>
import {defineComponent} from "vue";

import HeaderRow from "@/components/HeaderRow.vue";
import MainRow from "@/components/MainRow.vue";

export default defineComponent({
    components: {MainRow, HeaderRow, }
})
</script>


<style scoped>
</style>
