<template>
    <div >
      <div class="g-wrap6">
        <div>
          <div class="cover u-cover-dj">
              <img :src="list.songListPic" class="g-pic">
          </div>
          <div class="cnt">
            <div class="cntc">
              <h2 class="f-ff2 f-brk">{{list.songListName}}</h2>
              <div class="text-wrapper cntc-introduce">介绍：{{list.songListDescription}}</div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'SongHeader',
  props: {
    list: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .g-wrap6 {
    padding: 47px 30px 40px 39px;
  }
  .cover {
    float: left;
    position: relative;
    display: inline;
    margin: 0 -220px 0 0;
  }
  .u-cover-dj {
    width: 200px;
    height: 200px;
  }
  .cnt {
    float: right;
    width: 100%;
  }
  .cntc {
    margin-left: 230px;
  }
  .g-pic{
    width: 208px;
    height: 208px;
    background-position: 0 -1285px;
    top: -4px;
    left: -4px;
  }
  .cntc-introduce{
    font-size: 12px;
    color: #666;
  }
  .f-ff2{
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }
  .f-brk{
    word-wrap: break-word;
    white-space: normal;
    font-weight: normal;
  }

</style>
