<template>
    <div></div>
</template>

<script>
    export default {
      fetch({ store, params }) {
        store.commit('SET_NAV','movie')
      },
    }
</script>

<style scoped>

</style>
