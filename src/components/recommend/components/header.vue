<template>
  <div class="content-wrap">
    <div class="u-title">
      <h3>
        <span class="f-ff2">全部</span>
        <a class=" menu u-btn2-1 u-bt2">
          <i>
            "选择分类"
            <em class="u-icn u-icn-38"></em>
          </i>
        </a>
      </h3>
      <div class="u-choose">
        <button class="u-choose-bt">最新</button>
        <button class="u-choose-bt">热门</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HomeHeader'
}
</script>

<style scoped>
  .content-wrap{
    padding: 40px;
  }
  .u-title {
    height: 40px;
    border-bottom: 2px solid #c20c0c;
  }
  .f-ff2{
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }
  .u-title h3 {
    float: left;
    font-size: 24px;
    font-weight: normal;
  }
  .u-bt2{
    padding: 0 5px 0 0;
    white-space: nowrap;
    display: inline-block;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    *line-height: 32px;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
  }
  .u-btn2 i {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    *line-height: 32px;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
  }
  .u-title .menu {
    _position: absolute;
    font-size: 12px;
    font-weight: normal;
    margin: 2px 0 0 12px;
  }
  .u-title .u-icn-38{
    margin-left: 5px;
  }
  .u-icn-38 {
    width: 8px;
    height: 5px;
    background-position: -70px -543px;
  }
  .u-title .menu i {
    color: #0c73c2 !important;
    padding: 0 10px 0 15px;
    _padding-right: 20px;
  }
  .u-btn2-1 i {
    color: #333;
    background-position: 0 -59px;
  }
  .u-choose{
    float: right;
    width: 94px;
    height: 30px;
  }
  .u-choose-bt{
    width: 50%;
    height: 100%;
    float: right;
  }
</style>
