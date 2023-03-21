import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
const Layout = () => import("@/layout/index.vue")

/** 常驻路由 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: {
      hidden: true
    },
  },
  {
    path: '/403',
    component: () => import("@/views/error-page/403.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: '/404',
    component: () => import("@/views/error-page/404.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    component: Layout,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

/** 重置路由 */
// export function resetRouter() {
//   // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
//   try {
//     router.getRoutes().forEach((route) => {
//       const { name, meta } = route
//       if (name && meta.roles?.length) {
//         router.hasRoute(name) && router.removeRoute(name)
//       }
//     })
//   } catch (error) {
//     // 强制刷新浏览器也行，只是交互体验不是很好
//     window.location.reload()
//   }
// }

export default router
