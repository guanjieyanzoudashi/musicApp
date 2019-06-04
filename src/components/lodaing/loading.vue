<template>
  <div class="loading">
    <img  src="../../../static/img/loading.gif" class="ico">
    <span class="desc">{{title}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading{
  text-align: center;
}
.ico{
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 2px;
  vertical-align: middle
}
</style>
