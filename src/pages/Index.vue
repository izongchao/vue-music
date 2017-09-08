<template>
    <div id="index">
        <header class="ui-header ui-header-positive" style="z-index:9999;">
            <h1>Music</h1>
            <button class="ui-btn" @click="nowPlay" style="padding:2px 0;"><img class="rotation-img" :src="playMusicImg"></button>
        </header>
        <section class="ui-container">
            <ul class="ui-grid-trisect" v-show="false">
                <li v-for="music in musicLists" @click="goTo(music)">
                    <div >
                        <div class="ui-grid-trisect-img ">
                            <span v-lazy:background-image="music.imgurl" lazy="loading" class="slide" ></span>
                            <div class="ui-content">
                                <!--<h1 >{{music.title}}</h1>-->
                                <!--<h5>{{music.content}}</h5>-->
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="ui-list ui-list-link ui-border-tb">
                <li v-for="music in musicLists" :key="music.id" @click="goTo(music)">
                    <div class="ui-list-thumb">
                        <span v-lazy:background-image="music.imgurl" lazy="loading" class="slide"></span>
                    </div>
                    <div class="ui-list-info ui-border-t">
                        <h4 class="ui-nowrap">{{music.title}}<img v-if="musicInfo.id == music.id" class="playing" src="../static/img/playing.gif"></h4>
                        <p>{{music.content}}</p>
                    </div>
                </li>
            </ul>

        </section>
    </div>
</template>

<script>
        //:style="{backgroundImage: 'url(' + music.imgurl + ')'}"
    export default {
        name: 'index',
        data () {
            return {
                musicInfo:{},
                playMusicImg:require('../static/img/gmusicbrowser.png'),
                msg:'',
                musicLists:[
                    {
                        id:'1',
                        title:'刚好遇见你',
                        content:'李玉刚',
                        imgurl:'https://y.gtimg.cn/music/photo_new/T002R300x300M000002qBBpu2q0vL3.jpg?max_age=2592000',
                        source:'http://douban.xuzongchao.com/static/刚好遇见你.mp3',
                    },
                    {
                        id:'2',
                        title:'我们的纪念日',
                        content:'范玮琪',
                        imgurl:'https://y.gtimg.cn/music/photo_new/T002R300x300M000000LFQW42dqFZm.jpg?max_age=2592000',
                        source:'http://douban.xuzongchao.com/static/我们的纪念日.mp3',
                    },
                    {
                        id:'3',
                        title:'爱你如命',
                        content:'阿鲁阿卓',
                        imgurl:'https://y.gtimg.cn/music/photo_new/T002R300x300M000000XEAcV1g2RFn.jpg?max_age=2592000',
                        source:'http://douban.xuzongchao.com/static/爱你如命.mp3',
                    },
                    {
                        id:'4',
                        title:'红玫瑰',
                        content:'张碧晨',
                        imgurl:'https://y.gtimg.cn/music/photo_new/T002R300x300M000003Wo8jn2xZexC.jpg?max_age=2592000',
                        source:'http://douban.xuzongchao.com/static/红玫瑰.mp3',
                    },
                    {
                        title:'Counting Stars',
                        content:'OneRepublic',
                        imgurl:'https://y.gtimg.cn/music/photo_new/T002R300x300M0000019DOaT2CE0OG.jpg?max_age=2592000',
                        source:'http://douban.xuzongchao.com/static/CountingStars.mp3',
                        id:'5'
                    },
                    {
                        title:'Despacito',
                        content:'Justin Bieber',
                        imgurl:'https://y.gtimg.cn/music/photo_new/T002R300x300M000001C57iZ2gVPmn.jpg?max_age=2592000',
                        source:'http://douban.xuzongchao.com/static/Despacito.mp3',
                        id:'6'
                    },
                    {
                        id:'7',
                        title:'Ngẫu Hứng',
                        content:'Hoaprox',
                        imgurl:'https://y.gtimg.cn/music/photo_new/T002R300x300M000001ezHGp3zVP41.jpg?max_age=2592000',
                        source:'http://douban.xuzongchao.com/static/Hoaprox.mp3',
                    },
                    {
                        id:'8',
                        title:'Faded',
                        content:'Hoaprox',
                        imgurl:'https://y.gtimg.cn/music/photo_new/T002R300x300M000002Nt51E0q8Zoo.jpg?max_age=2592000',
                        source:'http://douban.xuzongchao.com/static/Faded.mp3',
                    },

                    {
                        id:'9',
                        title:'Call Me Maybe',
                        content:'Carly',
                        imgurl:'https://y.gtimg.cn/music/photo_new/T002R300x300M000004RM80k2qTnxo.jpg?max_age=2592000',
                        source:'http://douban.xuzongchao.com/static/CallMeMaybe.mp3',
                    },
                    {
                        id:'10',
                        title:'演员',
                        content:'薛之谦',
                        imgurl:'https://y.gtimg.cn/music/photo_new/T002R300x300M000003y8dsH2wBHlo.jpg?max_age=2592000',
                        source:'http://douban.xuzongchao.com/static/演员.mp3',
                    },
                    {
                        id:'11',
                        title:'Lonely',
                        content:'NANA',
                        imgurl:'https://y.gtimg.cn/music/photo_new/T002R300x300M000000V1USK3p6z4D.jpg?max_age=2592000',
                        source:'http://douban.xuzongchao.com/static/Lonely.mp3'
                    },
                    {
                        id:'12',
                        title:'Moonlight Shadow',
                        content:'Dana Winner',
                        imgurl:'https://y.gtimg.cn/music/photo_new/T002R300x300M0000047S47L3L8kPu.jpg?max_age=2592000',
                        source:'http://douban.xuzongchao.com/static/MoonlightShadow.mp3'
                    },
                    {
                        id:'13',
                        title:'喜欢你',
                        content:'邓紫棋',
                        imgurl:'https://y.gtimg.cn/music/photo_new/T002R300x300M000000cFPKx3ZGzks.jpg?max_age=2592000',
                        source:'http://douban.xuzongchao.com/static/喜欢你.mp3'
                    },
                    {
                        id:'14',
                        title:'穿越火线',
                        content:'谢霆锋',
                        imgurl:'https://y.gtimg.cn/music/photo_new/T002R300x300M00000029xnb1LObS6.jpg?max_age=2592000',
                        source:'http://douban.xuzongchao.com/static/穿越火线.mp3'
                    },
                    {
                        id:'15',
                        title:'爱情转移',
                        content:'陈奕迅',
                        imgurl:'https://y.gtimg.cn/music/photo_new/T002R300x300M000003yQidc3s7P65.jpg?max_age=2592000',
                        source:'http://douban.xuzongchao.com/static/爱情转移.mp3'
                    },
                    //
                    {
                        id:'16',
                        title:'告白气球',
                        content:'周杰伦',
                        imgurl:'https://y.gtimg.cn/music/photo_new/T002R300x300M000003RMaRI1iFoYd.jpg?max_age=2592000',
                        source:'http://douban.xuzongchao.com/static/告白气球.mp3'
                    },
                ]
            }
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
            naviate(){
                this.total +=1;
            },
            changeNumberToal()
            {
                this.total +=1;
                console.log(11111);
            },
            goTo(item) {
                this.musicInfo = item;
                this.playMusicImg = item.imgurl;
                this.$router.push({path:'/play',query:item});
            },
            nowPlay(){
                let currentMusicInfo = this.$localStorage.get('currentMusicInfo');
                if(!currentMusicInfo){
                    return;
                }
                for(let i = 0; i < this.musicLists.length;i++)
                {
                    if(this.musicLists[i].id == currentMusicInfo)
                    {
                        this.$router.push({path:'/play',query:this.musicLists[i]});
                    }
                }
            }
        }
    }
</script>

<style scoped>
    /*#index{
        position: fixed;
        width: 100%;
        height: 100%;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-size: cover;
        z-index: 1;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
    }*/
    .ui-content{
        width: 100%;
        height: 100%;
        position: absolute;
        color:white;
        top: 0;
        left: 0;
        text-align: center;
        z-index: 99;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-box-pack: center;
        -webkit-box-align: center;
    }
    .ui-btn{
        background-image: -webkit-gradient(linear,left top,left bottom,color-stop(.5,#f3f3f3),to(#f4f4f4));
    }
    /*background: linear-gradient(to bottom, blue, white);*/
    .ui-footer-positive, .ui-header-positive {
        background: linear-gradient(to top, #ececec, #fbfbfb);
        color: #000;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 1px -2px rgba(0, 0, 0, 0.12)
    }

    .ui-grid-trisect-img {
        padding-top: 100%;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        opacity: 0;
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50% 0);
    }
    .ui-header .ui-btn {
        display: block;
        position: absolute;
        right: 20px;
        top: 50%;
        min-width: 42px;
        margin-top: -15px;
    }

    @-webkit-keyframes fadeIn {
        0% {
            opacity: 0
        }

        to {
            opacity: 1
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0
        }

        to {
            opacity: 1
        }
    }

    .lazy-img-fadein[lazy=loaded] {
        -webkit-animation: fadeIn .8s ease both;
        animation: fadeIn .8s ease both;
        width: 100% !important;
        height: 100% !important;
        margin: auto;
    }

    .lazy-img-fadein[lazy-progressive=true] {
        width: 100% !important;
        margin: auto;
    }

    .lazy-img-fadein[lazy=error] {
        border-radius: 2px;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation-name: fadeIn;
        animation-name: fadeIn;
    }
    .ui-col-33 .lazy-img-fadein[lazy=loaded]{
        -webkit-box-shadow:0 0 5px rgba(0, 0, 0, .5);
    }
    .lazy-img-fadein[lazy=loading] {
        width: 100% !important;
        margin: auto;
    }
    @-webkit-keyframes rotation{
        from {-webkit-transform: rotate(0deg);}
        to {-webkit-transform: rotate(360deg);}
    }
    .rotation-img{
        width:26px;
        border-radius: 13px;
        -webkit-transform: rotate(360deg);
        animation: rotation 10s linear infinite;
        -webkit-animation: rotation 10s linear infinite;
    }
    .playing{
        height: 14px;margin-left:5px;
    }
</style>
