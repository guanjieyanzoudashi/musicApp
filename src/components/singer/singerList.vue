<template>
  <div class="singer">
    <ul class="singer-list">
      <li v-for="(item,index) in list" :key="index">
        <div v-if="index < 10">
          <img :src="'https://y.gtimg.cn/music/photo_new/T001R300x300M000'+item.Fsinger_mid+'.jpg?max_age=2592000'" @click="handleSingerClick(item)">
          <div style="text-align: center">
            <a class="u-hide" :singerPic="item.Fsinger_mid" @click="handleSingerClick(item)">{{item.Fsinger_name}}</a>
          </div>
        </div>
          <a v-if="index >9" class="u-hide" :singerPic="item.Fsinger_mid" @click="handleSingerClick(item)">{{item.Fsinger_name}}</a>
      </li>
      <div class="clear"></div>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'SingerList',
  props: {
    list: Array
  },
  methods: {
    handleSingerClick (singer) {
      this.setSinger(singer)
      this.$router.push('/singerDetails')
      console.log(this.singerName)
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .singer{
    margin-top: 60px;
  }
  .singer-list{
    width: 1220px;
    margin: 0 auto;
  }
  .singer-list li {
    float: left;
    width: 20%;
    font-size: 14px;
  }
  .singer-list a{
    line-height:36px;
    overflow: hidden;
  }
  .singer-list a:hover{
    color: rgb(194,12,12);
    cursor: pointer;
  }
  .singer-list img{
    display: block;
    width: 140px;
    height: 140px;
    border-radius: 126px;
    margin: 0 auto;
    cursor: pointer;
  }
  .singer_list__item_box{
    position: relative;
    margin-right: 20px;
    min-height: 195px;
    padding: 25px 0;
    overflow: hidden;
    text-align: center;
  }
</style>
