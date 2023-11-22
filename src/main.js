import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createRouter, createWebHashHistory } from 'vue-router'

import { createApp } from 'vue'
import App from './App.vue'

const routes = [
    {
        path: '/',
        component: () => import('./views/HomeView.vue')
    },
    {
        path: '/modify',
        component: () => import('./views/ModifyView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})



const app = createApp(App)

app.use(ElementPlus)

app.use(router)

app.mount('#app')
