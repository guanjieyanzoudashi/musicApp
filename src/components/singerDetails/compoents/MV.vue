<template>
    <div>
      <div>
        <ul>
          <li v-for="(item,id) in MV" :key="item.id">
            <div style="position: relative">
              <div  @click="handleSheetClick(item.id)">
                <img :src="item.imgurl">
                <a class="icon-play"></a>
              </div>
            </div>
            <p class="u-hide">{{item.name}}</p>
          </li>
          <div class="clear"></div>
        </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  name: 'Mv',
  props: {
    list: String
  },
  data () {
    return {
      MV: [],
      mvID: ''
    }
  },
  methods: {
    getMusic () {
      axios.get('https://v1.itooi.cn/netease/mv/artist?id=' + this.list)
        .then(this.getSingerSucc)
        .catch(this.getError)
    },
    getSingerSucc (res) {
      res = res.data
      if (res.data && res.code === 200) {
        const data = res.data
        this.MV = data
        console.log(data)
      }
    },
    getError (error) {
      console.info(error)
    },
    handleSheetClick (id) {
      this.$router.push('/mv')
      this.setMv(id)
    },
    ...mapMutations({
      setMv: 'SET_MV'
    })
  },
  mounted () {
    this.getMusic()
  },
  watch: {
    'list': function () {
      this.getMusic()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    width: 137px;
    height: 103px;
  }
  ul li{
    float: left;
    padding-left: 18px;
    width: 145px;
  }
  p{
    margin: 8px 0 3px;
    font-size: 14px;
  }
  .icon-play{
    width: 44px;
    height: 44px;
    top: 50%;
    left: 50%;
    margin: -22px 0 0 -22px;
    position: absolute;
    right: 10px;
    bottom: 5px;
    background: url(../../../../static/img/iconall.png) no-repeat;
    background-position: -30px -135px;
  }
</style>
