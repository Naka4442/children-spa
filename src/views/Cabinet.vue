<template>
    <main>
        <Header :title="title" />
    </main>
</template>
<script>
import Header from "../components/Header.vue";
export default {
    data(){
        return {
            title : "Кабинет"
        }
    },
    components : {
        Header
    }
}
</script>
<style lang="scss" scoped>

</style>