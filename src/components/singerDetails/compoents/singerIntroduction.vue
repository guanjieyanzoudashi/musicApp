<template>
    <div>
      <div>
        <span>{{singer.Fsinger_name}}</span>
        <span>简介</span>
      </div>
      <p>{{introduction.briefDesc}}</p>
      <div v-for="item in introduction.introduction">
        <h2>{{item.ti}}</h2>
        <p>{{item.txt}}</p>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'SingerIntroduction',
  props: {
    list: String
  },
  data () {
    return {
      introduction: []
    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  methods: {
    getMusic () {
      axios.get('https://v1.itooi.cn/netease/artist/info?id=' + this.list)
        .then(this.getSingerSucc)
        .catch(this.getError)
    },
    getSingerSucc (res) {
      res = res.data
      if (res.data && res.code === 200) {
        const data = res.data
        this.introduction = data
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
