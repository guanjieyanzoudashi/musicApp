<template>
    <div>
      <table>
        <tr v-for="(item,index) in song" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td></td>
          <td>{{item.al.name}}</td>
        </tr>
      </table>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
export default {
  name: 'HotMusic',
  props: {
    list: String
  },
  data () {
    return {
      song: []
    }
  },
  methods: {
    getMusic () {
      axios.get('https://v1.itooi.cn/netease/song/artist?id=' + this.list)
        .then(this.getSingerSucc)
        .catch(this.getError)
    },
    getSingerSucc (res) {
      res = res.data
      if (res.data && res.code === 200) {
        const data = res.data
        this.song = data
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

</style>
