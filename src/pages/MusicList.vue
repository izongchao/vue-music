<template>
    <div id="music_list">
        <header class="ui-header ui-header-positive" style="z-index:9999;background: #31c27c;">

        </header>
        <section class="ui-container">
            <ul class="ui-list ui-border-tb ui-list-function">
                <li class="ui-border-t">
                    <div class="ui-list-thumb">
                        <span style="background-image:url(https://y.gtimg.cn/music/photo_new/T002R300x300M000003R9HsC0XREW6.jpg?max_age=2592000)"></span>
                    </div>
                    <div class="ui-list-music">
                        <span style="max-width: 60%;float: left;display: block;" class="ui-nowrap">走着走着就散了</span>
                        <div style="max-width: 40%;float: left;height:32px">
                            <img height="32px" src="../static/img/SQ.png" />
                        </div>
                        <ul class="ui-row ui-txt-info ui-txt-sub" style="width: 100%;display: inline-block;">
                            <li class="ui-col ui-col-80">庄心妍</li>
                            <li class="ui-col ui-col-20">02:38</li>
                        </ul>
                    </div>

                </li>
                <li class="ui-border-t">
                    <div class="ui-list-thumb">
                        <span style="background-image:url(https://y.gtimg.cn/music/photo_new/T002R300x300M000000LFQW42dqFZm.jpg?max_age=2592000)"></span>
                    </div>
                    <div class="ui-list-info" style="display: block;">
                        <span style="max-width: 60%;height:32px;line-height:32px;float: left;display: block;" class="ui-nowrap">走着走着就散了</span>
                        <div style="max-width: 40%;float: left;height:32px"><img height="32px" src="../static/img/HQ.png" /><img height="32px" src="../static/img/SQ.png" /></div>
                        <div style="width: 100%;display: inline-block;"><p class="ui-nowrap">范玮琪断</p></div>
                    </div>
                </li>
                <li class="ui-border-t">
                    <div class="ui-list-thumb">
                        <span style="background-image:url(https://y.gtimg.cn/music/photo_new/T002R300x300M000000LFQW42dqFZm.jpg?max_age=2592000)"></span>
                    </div>
                    <div class="ui-list-info">
                        <h4 class="ui-nowrap" style="max-width: 60%">我们的纪念日我们的纪念日</h4>
                        <p class="ui-nowrap">范玮琪</p>
                        <div class="ui-feature">
                            <i class="ui-icon-play"></i>
                            <i class="ui-icon-cart"></i>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    //:style="{backgroundImage: 'url(' + music.imgurl + ')'}"
    export default {
        name: 'music_list',
        data () {
            return {}
        },

        created () {
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
            document.title = '首页';
        },
        mounted(){
            console.log('sss');
        },
        methods : {

        }
    }
</script>

<style scoped>
    .ui-list-music{
        -webkit-box-flex: 1;
        padding-top: 10px;
        padding-bottom: 10px;
        display: block;
        -webkit-box-orient: vertical;
        -webkit-box-pack: center;
    }
    .ui-feature{
        position: absolute;
        top: 50%;
        right: 15px;
        margin-top: -20px;
        height: 50px;
        line-height: 50px;
        padding: 0 11px;
    }
    .ui-border-t :hover{

    }
</style>
