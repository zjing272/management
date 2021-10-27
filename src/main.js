import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as echarts from 'echarts'

const app = createApp(App)
// Vue3给原型上挂载属性
app.config.globalProperties.$echarts = echarts

app.use(store).use(router).use(ElementPlus).mount('#app')
