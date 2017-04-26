import Vue from 'vue'
import Router from 'vue-router'
import { Button, Cell, Header, Tabbar, TabItem, Swipe, SwipeItem } from 'mint-ui'
import App from './App.vue'
import routers from './router/tabbarRouter.js'
Vue.use(Router) //记住要use
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Cell.name, Cell)
Vue.component(Tabbar.name, Cell)
Vue.component(TabItem.name, TabItem)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
const router = new Router(routers) //创建一个路由
new Vue({
    router: router,
    el: '#app',
    render: h => h(App)
})