<template>
    <div class="app-wrapper">
        <!-- 菜单 -->
        <Sidebar class="sidebar-container"></Sidebar>
        <div>
            <!-- 头 -->
            <header>头部</header>
            <!-- 内容 -->
            <main>内容</main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Sidebar } from "./components"; // 在index.ts文件中做了配置
</script>

<style lang="scss" scoped>
.app-wrapper {
    display: flex;
    height: 100%;
    width: 100%;
    .sidebar-container {
        transition: width 0.28s;
        // width: var(--v3-sidebar-width) !important;
        width: 220px;
        height: 100%;
        min-height: 400px;
        position: fixed;
        font-size: 0px;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1001;
        overflow: hidden;
    }
}
</style>
