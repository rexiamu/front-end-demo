import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/layout/index.vue";

const files = require.context('@/views', true, /\.vue$/)
let pages = {};
files.keys().forEach(key => {
  pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default;
})
//生成路由规则
let generator = [];
Object.keys(pages).forEach(item => {
  if (item != 'home') {
    generator.push({
      path: `/${item}`,
      title: pages[item].title || '未定义',
      component: Layout,
      children: [
        {
          path: "",
          component: () => import(`@/views/${item}`)
        }
      ]
    })
  }
});

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    title: '首页',
    children: [
      {
        path: "",
        component: () => import("@/views/home")
      }
    ]
  },
  ...generator,
  {
    path: '*',    // 此处需特别注意至于最底部
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
