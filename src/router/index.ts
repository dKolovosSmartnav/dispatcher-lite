import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/home/TabsPage.vue'
import ChatPage from '@/views/chat/ChatPage.vue';
import RoutePointInfoPage from '@/views/route/RoutePointInfoPage.vue';

const routes: Array<RouteRecordRaw> = [
  
  {
    path: '/',
    redirect: '/tabs/'
  },
  {
    path: '/routePointInfo',
    component: RoutePointInfoPage
  },
  {
    path: '/chat',
    component: ChatPage
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/info'
      },
      {
        path: 'info',
        component: () => import('@/views/home/tab-pages/InfoTab.vue')
      },
      {
        path: 'route',
        component: () => import('@/views/home/tab-pages/RouteTab.vue')
      },
      {
        path: 'contacts',
        component: () => import('@/views/home/tab-pages/ContactsTab.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
