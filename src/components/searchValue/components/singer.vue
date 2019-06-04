<template>
    <div>
    </div>
</template>
<script>
import axios from 'axios'
import Loading from '../../../components/lodaing/loading.vue'
export default {
  name: 'searchSinger',
  components: {
    Loading
  },
  props: {
    search: String
  },
  data () {
    return {
      content: '',
      song: [],
      load: true
    }
  },
  methods: {
    getContent () {
      this.content = localStorage.getItem('content')
    },
    getSong () {
      axios.get('https://v1.itooi.cn/netease/search?keyword=' + this.content + '&type=song&pageSize=30&page=' + this.eventPage)
        .then(this.getSongSucc)
        .catch(this.getError)
    },
    getSongSucc (res) {
      let _this = this
      res = res.data
      if (res.data && res.code === 200) {
        const data = res.data
        const pages = data.songCount
        _this.totalPage = Math.ceil(pages / 30)
        this.song = data.songs
        this.load = false
      }
    },
    getError (error) {
      console.info(error)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
