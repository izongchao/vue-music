<template>
    <div id="main" >
        <transition name="slide-fade">
            <keep-alive>
                <router-view v-if="!$route.meta.notKeepAlive"></router-view>
            </keep-alive>
            <router-view v-if="$route.meta.notKeepAlive"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'main',
        data () {
            return {

            }
        },

        created () {
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
            document.title = '首页';
            this.$localStorage.remove('currentMusicInfo');
        },
        methods : {

        }
    }
</script>

<style scoped>
    /*#main{
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-size: cover;
        z-index: 1;
    }*/

</style>
