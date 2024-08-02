import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { lazyPlugin } from './directives'

// //测试接口
// import { getCategory } from './apis/testAPI'
// getCategory().then(res => {
//     console.log(res)
// })

const app = createApp(App)

//引入懒加载插件并注册
app.use(lazyPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')

