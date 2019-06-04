<template>
    <div>
      <table class="m-table">
        <thead>
          <tr>
            <th>歌曲标题</th>
            <th>时长</th>
            <th>歌手</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of list.songs">
            <td>{{item.name}}</td>
            <td>{{format(item.time)}}</td>
            <td>{{item.singer}}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'SheetList',
  props: {
    list: Object
  },
  methods: {
    _pad (num, n = 2) {
      let len = num.toString().length
      while (len < n) {
        num = '0' + num
        len++
      }
      return num
    },
    format (interval) {
      interval = interval | 0
      const minute = interval / 60 | 0
      const second = this._pad(interval % 60)
      return `${'0' + minute}:${second}`
    }
  }
}
</script>
<style scoped>
  .m-table{
    width: 100%;
    text-align: center;
    border: 1px solid #d9d9d9;
  }
  .m-table td{
    padding: 6px 10px;
    line-height: 18px;
  }
  .m-table tr:nth-child(even) {
    background-color: #f7f7f7;
  }
</style>
