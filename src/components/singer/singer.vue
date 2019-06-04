<template>
  <div class="pageContainer">
    <keep-alive>
      <singer-list :list="singers"></singer-list>
    </keep-alive>
    <pager  :total-page="totalPage"
            :init-page="eventPage"
           @go-page="goPage">
    </pager>
  </div>
</template>

<script>
import {getSingerList} from 'api/singer'
import {ERR_OK} from 'api/config'
import pager from 'components/page/page.vue'
import SingerList from './singerList.vue'
export default {
  name: 'Singer',
  components: {
    SingerList,
    pager
  },
  data () {
    return {
      singers: [],
      page: 1,
      eventPage: 1,
      totalPage: 300
    }
  },
  mounted () {
    this.goPage(this.eventPage)
  },
  methods: {
    goPage  (data) {
      if (data.page === undefined) {
        this.eventPage = 1
      }else {
        this.eventPage = data.page
      }
      getSingerList(this.eventPage).then((res) => {
        if (res.code === ERR_OK) {
          this.singers = res.data.list
          console.log(this.singers)
        }
      })
    }
  },
  watch: {
    'page': function () {
      this.getPage()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pagesInner li{
    float: left;
    width: 24px;
    height: 24px;
    cursor: pointer;
    text-align: center;
    line-height: 24px;
    border:1px solid #ccc;
    margin: 0 4px 0 4px;
  }
  li:hover{
   border-color: black;
  }
  .actived{
    border-color: #A2161B;
    background-color: rgb(221,17,24);
    color: #fff;
  }
  .singer-list{
    width: 1220px;
    margin: 0 auto;
  }
  .fa{
    width: 70px !important;
  }
  .singer-list li {
    float: left;
    width: 20%;
  }
  .pagesInner{
    margin: 0 auto;
  }
</style>
