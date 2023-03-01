import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css'

import { createPinia } from 'pinia'
import naive from 'naive-ui'
import { createDiscreteApi } from "naive-ui"
import {router} from './router'

const { message, notification, dialog } = createDiscreteApi( ['message', 'dialog', 'notification'] ) // 可以直接使用message等方法


const app = createApp(App)


// 全局可以访问到
app.provide("message", message)
app.provide("notification", notification)
app.provide("dialog", dialog)

app.use(createPinia())
app.use(router)
app.use(naive)

app.mount('#app')
