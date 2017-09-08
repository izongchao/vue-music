import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index.vue'
import Play from '../pages/Play.vue'
import Main from '../pages/Main.vue'
import MusicList from '../pages/MusicList.vue'

Vue.use(Router)

const routes = [
    {
        name: 'music', path: '/music_list', component: MusicList, meta: {keepAlive: true}
    },
    {
        name: 'main', path: '/', component: Main, meta: {keepAlive: true},
        children: [
            {
                name:'index',
                path: '',
                component: Index,
                meta: {keepAlive: false}
            },
            {
                name:'play',
                path: 'play',
                component: Play,
                meta: {keepAlive: false}
            }]
    }
]

export default new Router({
    mode: 'history',
    routes, // （缩写）相当于 routes: routes
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || {x:0,y:0};
    }
})