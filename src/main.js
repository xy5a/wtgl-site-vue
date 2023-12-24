import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createRouter, createWebHashHistory } from 'vue-router'
import { VueCookies } from 'vue-cookies'

import { createApp } from 'vue'
import App from './App.vue'

const routes = [
    {
        path: '/home',
        component: () => import('./views/HomeView.vue')
    },
    {
        path: '/modify',
        component: () => import('./views/ModifyView.vue')
    },
    {
        path: '/query',
        component: () => import('./views/QueryView.vue')
    },
    {
        path: '/login',
        component: () => import('./views/LoginView.vue')
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/register',
        component: () => import('./views/RegisterView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})



const app = createApp(App)

app.use(ElementPlus)

app.use(VueCookies)

app.use(router)

app.mount('#app')
