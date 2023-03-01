

<template>
    <div id="app">
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="less">
body, html, #app {
    height: 100%;
    min-width: 100%;
}
</style>