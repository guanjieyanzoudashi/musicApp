<template>
    <div class="m-header">
      <div class="wrap">
        <h1 class="logo">
          <router-link tag="a" class="" to="/recommend" hidefocus="true">网易云音乐</router-link>
        </h1>
        <div class="srchbg">
          <span class="parent">
            <input placeholder="音乐/视频/电台/用户" @keyup.enter="submit($event)">
          </span>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'header',
  methods: {
    submit (e) {
      if (e.target.value !== '') {
        this.$router.push({ name: 'searchSong', params: { value: e.target.value }})
        localStorage.setItem('content', this.$route.params.value)
      }
      console.log(e.target.value)
    }
  }
}
</script>

<style scoped>
  .m-header {
    position: relative;
    z-index: 1000;
    height: 70px;
    box-sizing: border-box;
    background: #242424;
    border-bottom: 1px solid #000;
  }
  .wrap {
    width:1100px;
    margin: 0 auto;
    height: 100%;
  }
  .wrap .logo{
    background: url(../../../static/img/topbar.png) no-repeat 0 9999px;
  }
  .wrap .logo {
    float: left;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }
   .logo a {
    float: left;
    width: 157px;
    height: 100%;
    padding-right: 20px;
    text-indent: -9999px;
  }
  .srchbg{
    margin-top: 19px;
    background: url(../../../static/img/topbar.png) no-repeat 0 9999px;
    background-position: 0 -99px;
    background-color: #fff;
    border-radius: 32px;
    float: right;
    width: 158px;
    height: 32px;
  }
  .parent{
    display: block;
    position: relative;
    margin: 8px 0 0 30px;
  }
  .parent input{
    color: #333;
    line-height: 16px;
    width: 95%;
    margin: 0;
    padding: 0;
    background: transparent;
    opacity: 1;
    border: 0;
    outline: none;
  }
  .parent label{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    color: #9b9b9b;
    cursor: text;
  }
</style>
