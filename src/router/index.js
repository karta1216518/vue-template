import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首頁', icon: 'dashboard' },
        hidden: true
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system',
    meta: { title: '通用管理', icon: 'system' },
    children: [
      {
        path: 'picture',
        name: 'Picture',
        component: () => import('@/views/system/picture'),
        meta: { title: '圖片管理', icon: 'picture' }
      },
      {
        path: 'code',
        name: 'Code',
        component: () => import('@/views/system/code'),
        meta: { title: '代碼管理', icon: 'code' }
      }
    ]
  },
  {
    path: '/app',
    component: Layout,
    redirect: '/app',
    meta: { title: 'APP管理', icon: 'app' },
    children: [
      {
        path: 'vote',
        name: 'vote',
        component: () => import('@/views/app/vote'),
        meta: { title: '投票管理', icon: 'vote' }
      },
      {
        path: 'event',
        name: 'event',
        component: () => import('@/views/app/event'),
        meta: { title: '歷史事件', icon: 'event' }
      },
      {
        path: 'history',
        name: 'history',
        component: () => import('@/views/app/history'),
        meta: { title: '歷史數據', icon: 'history' }
      },
      {
        path: 'partisan',
        name: 'partisan',
        component: () => import('@/views/app/partisan'),
        meta: { title: '政黨管理', icon: 'partisan' }
      },
      {
        path: 'sqlite',
        name: 'sqlite',
        component: () => import('@/views/app/sqlite'),
        meta: { title: 'SQLite設定', icon: 'sqlite' }
      },
      {
        path: 'topic',
        name: 'topic',
        component: () => import('@/views/app/topic'),
        meta: { title: '議題管理', icon: 'topic' }
      }
    ]
  },
  {
    path: '/web',
    component: Layout,
    redirect: '/web',
    meta: { title: 'WEB管理', icon: 'web' },
    children: [
      {
        path: 'vote',
        name: 'vote',
        component: () => import('@/views/app/vote'),
        meta: { title: 'vote', icon: 'web' }
      },
      {
        path: 'vote2',
        name: 'vote3',
        component: () => import('@/views/app/vote'),
        meta: { title: 'vote', icon: 'web' }
      }
    ]
  },
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin',
    children: [
      {
        path: '',
        name: 'Admin',
        component: () => import('@/views/admin'),
        meta: { title: '管理員列表', icon: 'admin' }
      }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    redirect: '/setting',
    children: [
      {
        path: '',
        name: 'Setting',
        component: () => import('@/views/setting'),
        meta: { title: '系統設定', icon: 'setting' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
