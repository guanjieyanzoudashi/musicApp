<template>
    <div class="content" style="width: 1200px;position: relative">
      <div class="mod_data">
        <span class="data__cover">
           <img class="singer-pic" :src="'https://y.gtimg.cn/music/photo_new/T001R300x300M000'+singer.Fsinger_mid+'.jpg?max_age=2592000'" @error="show_default_image">
        </span>
        <div class="data__cont">
          <div>
            <h1 class="singer-name">{{singer.Fsinger_name}}</h1>
            <h3 class="singer-Fother_name">{{singer.Fother_name}}</h3>
            <div class="clear"></div>
          </div>
          <ul class="mod_data_statistic">
            <li>
              <span>单曲</span>
              <span></span>
            </li>
            <li>
              <span>专辑</span>
              <keep-alive>
                <span>{{singerMessage.albumSize}}</span>
              </keep-alive>
            </li>
            <li>
              <span>MV</span>
              <keep-alive>
                <span>{{singerMessage.mvSize}}</span>
              </keep-alive>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul class="m-tabs">
          <router-link   to="/singerDetails/hotMusic">
            <li>热门作品</li>
          </router-link>
          <router-link   to="/singerDetails/albums">
            <li>所有专辑</li>
          </router-link>
          <router-link   to="/singerDetails/mv">
            <li>相关MV</li>
          </router-link>
          <router-link   to="/singerDetails/singerIntroduction">
            <li>艺人介绍</li>
          </router-link>
        </ul>
        <router-view :list="singerId"></router-view>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import { mapGetters } from 'vuex'
import Albums from './compoents/albums.vue'
import HotMusic from './compoents/hotMusic.vue'
import Mv from './compoents/MV.vue'
import SingerIntroduction from './compoents/singerIntroduction.vue'
export default {
  name: 'SingerDetails',
  components: {
    Albums,
    HotMusic,
    Mv,
    SingerIntroduction
  },
  data () {
    return {
      singerMessage: {},
      singerId: ''
    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  methods: {
    show_default_image: function (event) {
      event.target.src = 'https://y.gtimg.cn/mediastyle/global/img/singer_300.png?max_age=31536000'
    },
    getSinger () {
      axios.get('https://v1.itooi.cn/netease/search?keyword=' + this.singer.Fsinger_name + '&type=singer&pageSize=20&page=0')
        .then(this.getSingerSucc)
        .catch(this.getError)
    },
    getSingerSucc (res) {
      res = res.data
      if (res.data && res.code === 200) {
        const data = res.data.artists
        this.singerMessage = data[0]
        this.singerId = data[0].id
        this.singerId = this.singerId.toString()
      }
    },
    getError (error) {
      console.info(error)
    }
  },
  mounted () {
    this.getSinger()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mod_data{
    position: relative;
    height: 250px;
    padding-left: 305px;
    margin-top: 40px;
    margin-bottom: 35px;
  }
  .singer-pic{
    border-radius: 999px;
    width: 250px;
    height: 250px;
  }
  .data__cover{
    position: absolute;
    left: 0;
    top: 0;
    width: 250px;
    height: 250px;
  }
  .data__cont{
    padding-top:31px
  }
  .singer-name{
    float: left;
    font-size: 38px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 90%;
    margin-right: 10px;
  }
  .singer-Fother_name{
    float: left;
    max-width: 23%;
    padding-left: 10px;
    font-size: 14px;
    line-height: 70px;
    color: #999;
    font-weight: normal;
  }
  .mod_data_statistic{
    height: 23px;
    line-height: 23px;
    overflow: hidden;
    font-size: 0;
    display: block;
    margin-top: 50px;
  }
  .mod_data_statistic li{
    display: inline-block;
    text-align: center;
    padding-right: 20px;
    margin-right: 20px;
    font-size: 18px;
  }
  .m-tabs{
    height: 41px;
    border: 1px solid #ccc ;
    margin: 4px;
  }
  .m-tabs li{
    float: left;
    height: 39px;
    font-size: 14px;
    width: 25%;
    text-align: center;
    line-height: 39px;
    background-color: rgb(248,248,248);
  }
  .m-tabs li:hover{
    cursor: pointer;
  }
</style>
