import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const errorLoad = error => {
  console.log(error)
}
export default new Router({
  mode: 'history',
  routes: [
        { path: '/', component: resolve => System.import('@/components/Hello').then(resolve).catch(errorLoad) },
        { path: '/basic', component: resolve => System.import('@/components/Basic').then(resolve).catch(errorLoad) }
  ]
})
