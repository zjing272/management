import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    // dashboard  仪表盘
    redirect: 'dashboard'
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      //  做登录校验，true表示进入这个页面是要登录的
      // login_require: true
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          title: '首页'
        },
        component: () => import('../views/Dashboard')
      },
      {
        path: "/user",
        name: "user",
        meta: {
          title: '个人中心'
        },
        component: () => import('../views/User')
      },
      {
        path: "/table",
        name: "table",
        meta: {
          title: '基础表格'
        },
        component: () => import('../views/Table')
      },
      {
        path: "/tabs",
        name: "tabs",
        meta: {
          title: 'tab选项卡'
        },
        component: () => import('../views/User')
      },
      {
        path: "/form",
        name: "form",
        meta: {
          title: '基本表单'
        },
        component: () => import('../views/User')
      },
      {
        path: "/upload",
        name: "upload",
        meta: {
          title: '文件上传'
        },
        component: () => import('../views/User')
      },
      {
        path: "/editor",
        name: "editor",
        meta: {
          title: '富文本编辑'
        },
        component: () => import('../views/User')
      },
      {
        path: "/icon",
        name: "icon",
        meta: {
          title: '图标'
        },
        component: () => import('../views/User')
      },
      {
        path: "/charts",
        name: "charts",
        meta: {
          title: '图表'
        },
        component: () => import('../views/User')
      },
      {
        path: "/i18n",
        name: "i18n",
        meta: {
          title: '国际化功能'
        },
        component: () => import('../views/User')
      },
      {
        path: "/permission",
        name: "permission",
        meta: {
          title: '权限测试'
        },
        component: () => import('../views/User')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // meta 元数据字段，在这里设自定义信息
    meta: {
      title: '登录'
    },
    // 路由懒加载（按需加载路由对应的资源）
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
//全局前置守卫，用于在路由配置生效之前进行一些动作
router.beforeEach((to, from, next) => {
  // 修改网页标题
  document.title = `${to.meta.title} | management`
  //获取用户名
  const role = localStorage.getItem('ms_username');
  if(!role && to.path !== '/login') {
    // 用户名不存在并且将要进入的页面不是login页面，则进入login页面
    next('/login')
  } else if(to.meta.login_require) {
    // 如果进入这个页面是需要校验的
    // 如果是管理员权限则可以进入（简单模拟管理员权限）
    role === 'admin' ? next() : next('/403')
  } else {
    next()
  }
})

export default router
