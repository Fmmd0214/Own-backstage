<template>
    <n-page-header subtitle="让你的听觉更懂视觉">
      <template #title>
        <a
          href="https://anyway.fm/"
          style="text-decoration: none; color: inherit"
        >Anyway.FM</a>
      </template>
      <template #header>
        
      </template>
      <template #avatar>
        <n-avatar
          src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
        />
      </template>
      <template #extra>
        <n-space>
          <n-button>催更</n-button>
          <n-dropdown :options="options" placement="bottom-start">
            <n-button :bordered="false" style="padding: 0 4px">
              ···
            </n-button>
          </n-dropdown>
        </n-space>
      </template>
      <template #footer>
        <!-- <n-breadcrumb>
          <n-breadcrumb-item>播客</n-breadcrumb-item>
          <n-breadcrumb-item>精选</n-breadcrumb-item>
          <n-breadcrumb-item>超级精选</n-breadcrumb-item>
          <n-breadcrumb-item>Anyway.FM</n-breadcrumb-item>
        </n-breadcrumb> -->
		<Bread></Bread>
      </template>
    </n-page-header>
  </template>
  
  <script lang="ts">
  import Bread from './Breadcrumb.vue'
  import { defineComponent } from 'vue'
  import { useMessage } from 'naive-ui'
  
  export default defineComponent({
    components: {
			Bread
		},
    setup () {
    //   const message = useMessage()
      return {
		
        options: [
          {
            label: '退出登陆',
            key: '1'
          },
          {
            label: '个人用户中心',
            key: '2'
          },
        ]
      }
    }
  })
  </script>