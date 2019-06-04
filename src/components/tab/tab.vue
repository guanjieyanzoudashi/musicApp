<template>
  <div class="nav">
    <div class="wrap">
      <div class="tab">
        <router-link tag="div" class="tab-item" to="/recommend">
          <span class="tab-link">歌单</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/singer">
          <span class="tab-link">歌手</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/rank">
          <span class="tab-link">排行榜</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/search">
          <span class="tab-link">专辑</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped >
  .wrap {
    width:1100px;
    margin: 0 auto;
    height: 100%;
  }
  .nav {
    z-index: 90;
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
  }
  .tab{
    float: left;
    padding-left: 180px;
  }
  .tab div{
    float: left;
    color: white;
    height: 34px;
    text-align: center;
  }
  .tab span{
    display: inline-block;
    height: 20px;
    padding: 0 13px;
    margin: 7px 17px 0;
    border-radius: 20px;
    line-height: 21px;
  }
  .tab-item{
    cursor: pointer;
  }
</style>
