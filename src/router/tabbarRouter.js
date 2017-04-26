import playing from '../components/playing.vue'
import hot from '../components/hotmodule.vue'
import ranking from '../components/ranking.vue'

export default {
    routes: [
        { path: "/playing", component: playing },
        { path: "/ranking", component: ranking },
        { path: "/", component: hot }
    ]
}


//路由文件夹只引路径 和 模板 不管其他