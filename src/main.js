import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index.js'
import './assets/css/theme.css'
import './assets/css/antdv.css' //背景css
import './assets/css/public.css'
import './assets/css/iconfont.css'


import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'font-awesome/css/font-awesome.min.css'

import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)
app.use(Antd)
app.use(createPinia())
//app.use(router) 需放在app.mount('#app')前面 
app.mount('#app')

