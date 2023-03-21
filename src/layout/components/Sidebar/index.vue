<template>
    <div>
        <div>logo</div>
        <!-- 代替网页滚动条 -->
        <el-scrollbar>
            <el-menu
                :background-color="v3SidebarMenuBgColor"
                :text-color="v3SidebarMenuTextColor"
                :active-text-color="v3SidebarMenuActiveTextColor"
            >
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>Navigator One</span>
                    </template>
                    <el-menu-item-group>
                        <template #title><span>Group One</span></template>
                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-4">
                        <template #title><span>item four</span></template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2">
                    <el-icon><icon-menu /></el-icon>
                    <template #title>Navigator Two</template>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <el-icon><document /></el-icon>
                    <template #title>Navigator Three</template>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import { getCssVariableValue } from "@/utils";



const v3SidebarMenuBgColor = getCssVariableValue("--v3-sidebar-menu-bg-color");
const v3SidebarMenuTextColor = getCssVariableValue(
    "--v3-sidebar-menu-text-color"
);
const v3SidebarMenuActiveTextColor = getCssVariableValue(
    "--v3-sidebar-menu-active-text-color"
);


</script>

<style lang="scss" scope></style>
