<template>
    <n-layout class="layout" has-sider>
        <Menu />
        <n-layout>
            <n-layout-header bordered>
                <Header />
            </n-layout-header>
            <n-layout-content content-style="padding: 24px;">
                内容
            </n-layout-content>
            <n-layout-footer>
                <Footer />
            </n-layout-footer>
        </n-layout>
    </n-layout>
</template>

<script setup lang="ts">
import Header from "./Header/index.vue";
import Menu from "./Menu/index.vue";
import Footer from "./Footer/index.vue";
</script>

<style scoped lang="less">
.layout {
    height: 100%;
    width: 100%;
}
</style>
