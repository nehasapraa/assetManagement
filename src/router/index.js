import Vue from 'vue'
import Router from 'vue-router'
import AssetsList from '@/components/AssetsList'
import AddAsset from '@/components/AddAsset'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AssetsList',
      component: AssetsList
    },
    {
      path: '/assets',
      name: 'AssetsList',
      component: AssetsList
    },
    {
      path: '/add-asset',
      name: 'AddAsset',
      component: AddAsset
    }
  ]
})
