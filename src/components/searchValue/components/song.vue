<template>
    <div>
      <div v-show="load">
        <loading></loading>
      </div>
      <div class="n-srchrst">
        <div class="srchsongst">
          <div class="item f-cb" v-for="(item,id) in song" :key="item.id">
            <div class="td"></div>
            <div class="td w0"><a>{{item.name}}</a></div>
            <div class="td w1">
              <div class="td" v-for="(items,id) in item.ar" :key="items.id">
                <span class="u-hide">{{items.name}}</span>
              </div>
            </div>
            <div class="td w2 u-hide">《{{item.al.name}}》</div>
            <div class="td">{{item.dt}}</div>
          </div>
        </div>
      </div>
      <pager  :total-page="totalPage"
              :init-page="eventPage"
              @go-page="goPage">
      </pager>
    </div>
</template>

<script>
import axios from 'axios'
import Loading from '../../../components/lodaing/loading.vue'
import pager from '../../../components/page/page.vue'
export default {
  name: 'searchSong',
  components: {
    pager,
    Loading
  },
  props: {
    search: String
  },
  data () {
    return {
      content: '',
      song: [],
      load: true,
      page: 1,
      eventPage: 1,
      totalPage: null
    }
  },
  methods: {
    getContent () {
      this.content = localStorage.getItem('content')
    },
    goPage (data) {
      this.eventPage = data.page
      console.log(this.eventPage)
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
    },
    update () {
      this.content = this.search
      this.load = true
      this.song = null
    }
  },
  mounted () {
    this.getContent()
    this.getSong(this.eventPage)
    this.goPage(this.eventPage)
  },
  watch: {
    search () {
      this.update()
      this.getSong()
    },
    eventPage () {
      this.update()
      this.getContent()
      this.getSong(this.content)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.n-srchrst{
  margin-top:20px;
}
.n-srchrst .srchsongst .item {
  padding: 10px 10px 8px 18px;
  border: 1px solid #fff;
}
.n-srchrst .srchsongst .td {
  float: left;
  margin-right: 5px;
}
.f-cb:after {
  clear: both;
  content: '.';
  display: block;
  height: 0;
  visibility: hidden;
}
.n-srchrst .srchsongst .w0 {
  width: 370px;
}
.n-srchrst .srchsongst .w1 {
  width: 15%;
  margin-right: 12px;
}
.n-srchrst .srchsongst .w2 {
  width: 18%;
  margin-right: 12px;
}
.srchsongst .item:nth-child(even){
  background-color: #f7f7f7;
}
</style>
