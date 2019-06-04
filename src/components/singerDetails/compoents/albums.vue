<template>
    <div>
      <ul>
        <li v-for="(item,id) in albums" :key="item.id">
          <div>
            <img :src="item.blurPicUrl">
          </div>
          <p>{{item.name}}</p>
          <p>{{item.publishTime}}</p>
        </li>
        <div class="clear"></div>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
export default {
  name: 'Albums',
  props: {
    list: String
  },
  data () {
    return {
      albums: []
    }
  },
  methods: {
    getMusic () {
      axios.get('https://v1.itooi.cn/netease/album/artist?id=' + this.list)
        .then(this.getSingerSucc)
        .catch(this.getError)
    },
    getSingerSucc (res) {
      res = res.data
      if (res.data && res.code === 200) {
        const data = res.data
        this.albums = data
        console.log(data)
      }
    },
    getError (error) {
      console.info(error)
    }
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
    width: 120px;
    height: 120px;
  }
  ul li{
    float: left;
    padding-left: 18px;
  }
</style>
