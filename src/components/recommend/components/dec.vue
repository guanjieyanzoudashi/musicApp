<template>
  <div >
    <ul class="m-cvrlst" >
      <li v-for="(item, key) in list" :key="item.id" >
        <router-link tag="div" class="u-cover u-cover-1 cursor" to="/details">
          <img :src="item.coverImgUrl" @click="handleSheetClick(item.id)">
        </router-link>
        <p class="u-hide m-title">{{item.title}}</p>
        <p class="m-creator">by {{item.creator}}</p>
      </li>
      <div class="clear"></div>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapMutations } from 'vuex'
export default {
  name: 'Dec',
  props: {
    list: Array
  },
  methods: {
    handleSheetClick (id) {
      this.songSheet(id)
    },
    ...mapMutations({
      songSheet: 'SET_SHEET'
    })
  }
}
</script>
<style scoped>
  .m-cvrlst{
    position: relative;
  }
  .m-cvrlst li{
    float: left;
    display: inline-block;
    width: 190px;
    height: 218px;
    overflow: hidden;
    padding: 0 0 30px 50px;
    line-height: 1.4;
  }
  .m-cvrlst img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .u-cover-1 {
    width: 140px;
    height: 140px;
  }
  .u-cover {
    position: relative;
    display: block;
  }
  .u-hide {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .m-title{
    margin: 8px 0 3px;
    font-size: 14px;
  }
  .m-creator{
    color: #999;
  }
</style>
