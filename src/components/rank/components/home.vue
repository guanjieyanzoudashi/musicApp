<template>
    <div class="g-mn3">
      <div class="g-wrap fcb">
        <div class="cover u-cover u-cover-rank">
          <img :src="songList.songListPic">
        </div>
        <div class="cnt">
          <div class="ctc">
            <div class="hd fcb">
              <h2 class="f-ff2">{{songList.songListName}}</h2>
              <p>{{songList.songListDescription}}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <table class="m-table">
          <thead>
            <tr>
              <th>序号</th>
              <th>标题</th>
              <th>时长</th>
              <th>歌手</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(items,index) in songList.songs" :key="index">
              <td><div v-if="index < 3"><img :src="items.pic"></div>{{items.name}}</td>
              <td>{{items.time}}</td>
              <td>{{items.singer}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import Bus from '@/Bus/index.js'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      'btext': '19723756',
      songList: {}
    }
  },
  created () {
    this.bbtn()
    this.songDetails()
  },
  methods: {
    bbtn () {
      Bus.$on('userEvent',(message) => {
        this.btext = message
      })
    },
    songDetails () {
      axios.get('/api/songList?key=579621905&id=' + this.btext + '&limit=20&offset=0')
        .then(this.getHomeInfoSucc)
        .catch(this.getError)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.data && res.code == '200') {
        const data = res.data
        this.songList = data
        console.log(this.songList)
      }
    },
    getError (error) {
      console.info(error)
    }
  },
  watch: {
    'btext': function () {
      this.songDetails()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .g-wrap{
    padding: 40px;
  }
  .cover {
    float: left;
    position: relative;
    display: inline;
    margin: 0 -220px 0 0;
  }
  .u-cover-rank {
    padding: 3px;
    border: 1px solid #ccc;
  }
  .u-cover-rank, .u-cover-rank img {
    width: 150px;
    height: 150px;
  }
  .g-mn3{
    height: 100%;
    float: right;
    width: 738px;
    padding-bottom: 50px;
  }
  .cnt{
    float: right;
    width: 100%;
  }
  .ctc{
    margin-left: 187px;
  }
  .hd{
    margin: 16px 0 4px;
    position: relative;
    line-height: 24px;
  }
  .hd h2 {
    line-height: 24px;
    font-size: 20px;
    font-weight: normal;
  }
  .f-ff2{
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }
  .m-table img{
    width: 50px;
    height: 50px;
  }
</style>
