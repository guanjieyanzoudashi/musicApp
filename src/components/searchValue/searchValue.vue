<template>
  <div>
    <div class="content">
      <div class="g-wrap">
        <div class="pgsrch f-pr">
          <input class="n-srch"  type="text" ref="input1" @keyup.enter="submit()" >
        </div>
        <div>
          <div class="snote">搜索{{contentValue}}，找到</div>
          <ul class="m-tabs">
            <router-link   to="/search/song">
              <li>单曲</li>
            </router-link>
            <router-link   to="/search/singer">
              <li>歌手</li>
            </router-link>
            <router-link   to="/search/album">
              <li>专辑</li>
            </router-link>
            <router-link   to="/search/video">
              <li>视频</li>
            </router-link>
            <router-link   to="/search/lrc">
              <li>歌词</li>
            </router-link>
            <router-link   to="/search/songList">
              <li>歌单</li>
            </router-link>
            <router-link   to="/search/radio">
              <li>主播电台</li>
            </router-link>
            <router-link   to="/search/user">
              <li>用户</li>
            </router-link>
          </ul>
          <router-view :search="searchValue"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchSong from './components/song.vue'
export default {
  name: 'searchValue',
  components: {
    searchSong
  },
  data () {
    return {
      contentValue: '',
      searchValue: ''
    }
  },
  methods: {
    setInput () {
      this.$refs.input1.value = localStorage.getItem('content')
      this.contentValue = localStorage.getItem('content')
    },
    submit () {
      localStorage.setItem('content', this.$refs.input1.value)
      this.searchValue = localStorage.getItem('content')
    }
  },
  mounted () {
    this.setInput()
  },
  watch: {
    searchValue (newValue, oldValue) {
      this.contentValue = newValue
      console.log(newValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .g-wrap{
    padding: 40px;
  }
  .pgsrch{
    width: 420px;
    height: 40px;
    margin: 0 auto;
    background: url(../../../static/img/sprite.png);
    background-position: 0 0;
    z-index: 10;
  }
  .f-pr{
    position: relative;
    zoom: 1;
  }
  .n-srch{
    float: left;
    width: 320px;
    height: 17px;
    margin: 12px 0 0 20px;
    padding: 0;
    background: #fff;
    border: none;
    outline: none;
  }
  .snote{
    margin: 28px 0 17px;
    color: #999;
  }
  .m-tabs{
    height: 39px;
    border: 1px solid #ccc;
    background: url(../../../static/img/tab.png);
    background-position: 0 0;
    background-repeat: repeat-x;
  }
  .m-tabs li{
    position: relative;
    float: left;
    height: 39px;
    font-size: 14px;
    width: 108px;
    padding: 2px 2px 0 0;
    line-height: 37px;
    cursor: pointer;
    text-align: center;
  }
</style>
