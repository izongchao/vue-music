<template>
    <div id="play" v-show="ok">
        <div id="play-container" :style="{backgroundImage: 'url(' + musicInfo.imgurl + ')'}">

        </div>
        <div id="play-container-bg">
            <header class="ui-header">
                <i class="ui-icon-return" onclick="history.back()"></i>
            </header>
            <section class="ui-notice">
                <div class="ui-whitespace" id="playContainer">
                    <img class="ui-img-center rotation-img" id="rotation" :src="musicInfo.imgurl">
                </div>

                <p style="color:white;margin: 20px;">{{musicInfo.title}}</p>
                <div class="ui-whitespace">
                    <i @click="play" :class="playStatus ? 'ui-icon-stop' : 'ui-icon-play'" ></i>
                </div>

                <div class="ui-whitespace bottom-placehold">

                </div>
            </section>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'play',
        data () {
            return {
                ok:true,
                currentPlayMusicId:this.$route.query.musicId,
                playStatus:true,
                musicInfo:this.$route.query
            }
        },

        created () {
            let currentMusicInfo = this.$localStorage.get('currentMusicInfo');
            let init = false;
            console.log(this.musicInfo.id);
            if (currentMusicInfo) {

                if(currentMusicInfo == this.musicInfo.id){
                    init = false;
                } else {
                    init = true;
                }
            } else {
                console.log(currentMusicInfo);
                init = true;
            }
            this.$localStorage.set('currentMusicInfo', this.musicInfo.id);
            let audio = document.querySelector('#audio');

            if (init) {
                audio.src = this.musicInfo.source;
                audio.load();
            } else {

                if(audio.paused)
                {
                    audio.play();
                }
            }
        },
        //离开后销毁数据
        deactivated () {
            this.$destroy();
        },
        methods : {
            play()
            {
                if(this.playStatus == true)
                {
                    audio.pause();
                    this.playStatus = false;
                } else {
                    audio.play();
                    this.playStatus = true;
                }
            }
        }
    }
    //:style="{backgroundImage: 'url(' + musicInfo.imgurl + ')'}"
</script>


<style scoped>
    #play{
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-size: cover;
        z-index: 1;
    }
    .ui-icon-return{
        color:white;
    }
    #play-container {
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-size: cover;
        z-index: 1;
        background-clip:content-box;
        -webkit-filter: blur(5px); filter: blur(5px);
        background-repeat: no-repeat;

    }
    #play-container-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index: 2;
        background-color: rgba(0,0,0,0.7);
        }

    @-webkit-keyframes rotation{
        from {-webkit-transform: rotate(0deg);}
        to {-webkit-transform: rotate(360deg);}
    }
    .rotation-img{
        animation: rotation 30s linear infinite;
        -moz-animation: rotation 30s linear infinite;
        -webkit-animation: rotation 30s linear infinite;
        -o-animation: rotation 30s linear infinite;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to{
        opacity: 0;
        -webkit-transform: translate(50%, 0);
        transform: translate(50% 0);
    }
    .ui-img-center
    {
        width: 90%;
        border: 7px solid rgba(0,0,0,0.2);
        border-radius: 50%;
        margin: 0 auto;
    }
    .bottom-placehold{
        height: 10%;
    }
    .ui-whitespace{
        width: 100%;
    }
    .ui-icon-play{
        font-size: 65px;
        color:white;
    }
    .ui-icon-stop{
        font-size: 65px;
        color:white;
    }
    .play-paused{
        animation-play-state:paused;
        -webkit-animation-play-state:paused;
    }
    .no-animation {
        -webkit-animation: none !important;
        animation: none !important;
    }

</style>
