<template>
  <div class="content">
    <home-header></home-header>
    <dec :list="sheetMessage"></dec>
  </div>
</template>

<script type="text/ecmascript-6">
import HomeHeader from './components/header.vue'
import Dec from './components/dec.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    Dec
  },
  data () {
    return {
      sheetMessage: []
    }
  },
  methods: {
    getSongSheet () {
      axios.get('/api/hotSongList?key=579621905&cat=全部&limit=35&offset=0')
        .then(this.getHomeInfoSucc)
        .catch(this.getError)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.data && res.code == '200') {
        const data = res.data
        this.sheetMessage = data
      }
    },
    getError (error) {
      console.info(error)
    }
  },
  mounted () {
    this.getSongSheet()
  }

}
</script>

<style scoped >

</style>
