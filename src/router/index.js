import Vue from 'vue'
import Router from 'vue-router'
import Calendar from '@/components/Calendar'
import Home from '@/components/Home'

import BoardList from '@/components/BoardList'
import ShowBoard from '@/components/ShowBoard'
import AddBoard from '@/components/AddBoard'
import EditBoard from '@/components/EditBoard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  	{
  		path: '/',
  		name: 'home',
  		component: Home
  	},
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/boardlist',
      name: 'BoardList',
      component: BoardList
    },
    {
      path: '/show-board/:id',
      name: 'ShowBoard',
      component: ShowBoard
    },
    {
      path: '/add-board',
      name: 'AddBoard',
      component: AddBoard
    },
    {
      path: '/edit-board/:id',
      name: 'EditBoard',
      component: EditBoard
    }
  ]
})
