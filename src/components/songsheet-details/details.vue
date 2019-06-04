<template>
  <keep-alive>
    <div class="g-bd4">
      <song-header :list="songList"></song-header>
      <sheet-list :list="songList"></sheet-list>
    </div>
  </keep-alive>
</template>

<script type="text/ecmascript-6">
import SongHeader from './components/header.vue'
import SheetList from './components/sheetList.vue'
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'Details',
  components: {
    SongHeader,
    SheetList
  },
  data () {
    return {
      songList: {}
    }
  },
  computed: {
    ...mapGetters([
      'id'
    ])
  },
  methods: {
    songDetails () {
      axios.get('/api/songList?key=579621905&id=' + this.id + '&limit=20&offset=0')
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
  mounted () {
    this.songDetails()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
