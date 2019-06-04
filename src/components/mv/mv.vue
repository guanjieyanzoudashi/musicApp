<template>
  <div class="content">
    <div class="mv">
      <span class="n-mv">{{mvPlay.name}}</span>
      <div v-for="(item,id) in mvPlay.artists" :key="item.id" class="singerName">
        <span>{{item.name}}</span>
      </div>
      <div class="mv-video">
        <video-player  class="mv-play video-player vjs-custom-skin" ref="videoPlayer"
                       :playsinline="true"
                       :options="playerOptions"
                       @play="onPlayerPlay($event)"
                       @pause="onPlayerPause($event)">
        </video-player>
      </div>
      <div>
        <p>MV简介</p>
        <p>发布时间: {{mvPlay.publishTime}}</p>
        <p>播放次数: {{mvPlay.playCount}}</p>
        <p>{{mvPlay.briefDesc}}</p>
        <p>{{mvPlay.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
import { mapGetters } from 'vuex'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
export default {
  components: {
    videoPlayer
  },
  name: 'mvPlay',
  data () {
    return {
      mvPlay: [],
      mvVideo: [],
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: 'auto',
        language: 'zh-CN',
        aspectRatio: '16:9',
        fluid: true,
        sources: [{
          type: 'video/mp4',
          src: `https://v1.itooi.cn/netease/mvUrl?id=${this.mv}&quality=1080`
        }],
        poster: '',
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'mvID'
    ])
  },
  methods: {
    getMusic () {
      this.mv = this.mvID
      console.log(this.mvID)
      axios.get('https://v1.itooi.cn/netease/mv?id=' + this.mvID)
        .then(this.getSingerSucc)
        .catch(this.getError)
    },
    getSingerSucc (res) {
      res = res.data.data
      if (res.data && res.code === 200) {
        const data = res.data
        this.mvPlay = data
      }
    },
    getError (error) {
      console.info(error)
    }
  },
  mounted () {
    this.getMusic()
    this.playerOptions.sources[0].src = 'https://v1.itooi.cn/netease/mvUrl?id=' + this.mvID + '&quality=1080'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mv{
    padding: 47px 30px 40px 39px;
    margin-top: -23px;
  }
  .singerName{
    display: inline-block;
    color: #0c73c2;
  }
  .n-mv{
    max-width: 100%;
    margin-top: -10px;
    margin-right: 8px;
    font-size: 24px;
    line-height: 32px;
  }
  .mv-video{
    width: 800px;
    height: 450px;
    background-color: #2e2e2e;
    font-size: 0;
    line-height: 0;
    position: relative;
  }
  .mv-play{
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0);
  }

</style>
