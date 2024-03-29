<template>
  <div class="pager-wrapper" v-if="totalPage > 0">
    <div class="pager-pages">
      <a v-show="currentPage > 1 && showPrev" @click="go(currentPage - 1)">{{textPrevious}}</a>
      <a :class="{active: currentPage == 1 ? true : false}" @click="go(1)">1</a>
      <strong v-show="pages[0] > 2">...</strong>
      <a v-for="page in pages" :class="{active: currentPage == page ? true : false}" @click="go(page)">{{page}}</a>
      <strong v-show="pages[pages.length-1] < totalPage - 1">...</strong>
      <a v-if="totalPage > 1" :class="{active: currentPage == totalPage ? true : false}" @click="go(totalPage)">{{totalPage}}</a>
      <a v-show="currentPage < totalPage && showNext" @click="go(currentPage + 1)">{{textNext}}</a>
    </div>
    <div v-if="showJump" v-show="totalPage > 1" class="pager-jump">
      <span>{{textTotal}}<em class="jump-total">{{totalPage}}</em>{{textJump}}</span>
      <input type="number" min="1" :max="totalPage" v-model="jumpPage" class="jump-input">
      <span>{{textPage}}</span>
      <a @click="go(jumpPage)">{{textSet}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    totalPage: { // 总页数
      type: Number,
      default: 1,
      required: true
    },
    showItems: { // 显示出来的页数，如: 1 ... 34[5]67 ... 10
      type: Number,
      default: 5
    },
    showPrev: { // 是否显示“上一页”
      type: Boolean,
      default: true
    },
    showNext: { // 是否显示“下一页”
      type: Boolean,
      default: true
    },
    showJump: { // 是否显示“跳转”
      type: Boolean,
      default: true
    },
    initPage: {
      type: Number,
      default: 1
    },
    mode: {
      type: String,
      default: 'event'
    },
    routeName: {
      type: String
    },
    textPrevious: {
      type: String,
      default: '上一页'
    },
    textNext: {
      type: String,
      default: '下一页'
    },
    textPage: {
      type: String,
      default: '页'
    },
    textTotal: {
      type: String,
      default: '共'
    },
    textSet: {
      type: String,
      default: '确定'
    },
    textJump: {
      type: String,
      default: '页 ，跳至'
    }
  },
  data () {
    return {
      currentPage: 0,
      jumpPage: 0
    }
  },
  created () {
    this.currentPage = this.initPage
    if (this.mode == 'params' && !this.routeName) {
      throw 'need a route name when choose params mode in pager component'
    }
  },
  computed: {
    pages () {
      let getPages = (start,end) => {
        if (start <= 1 || start > end || start >= this.totalPage) {
          start = 2
        }
        if (end >= this.totalPage || end < start || end <= 1) {
          end = this.totalPage - 1
        }
        let arr = []
        for (let i = start; i <= end; i++) {
          arr.push(i)
        }
        return arr
      }
      let counts = this.showItems
      if (this.totalPage < counts + 2) {
        return getPages(2,this.totalPage)
      } else {
        if (this.currentPage <= Math.ceil(counts/2)) {
          return getPages(2,counts)
        } else if (this.currentPage >= this.totalPage - Math.floor(counts/2)) {
          return getPages(this.totalPage + 1 - counts,this.totalPage - 1)
        } else {
          let half = Math.ceil(counts / 2) - 1
          let end = this.currentPage + half
          if (counts % 2 === 0) {
            end++
          }
          return getPages(this.currentPage - half,end)
        }
      }
    }
  },
  methods: {
    go (page) {
      if (page < 1) {
        page = 1
      }
      if (page > this.totalPage) {
        page = this.totalPage
      }
      if (page === this.currentPage) {
        return
      }
      this.currentPage = parseInt(page,10)
      if (this.mode == 'query') {
        let query = this.$route.query
        query.page = this.currentPage
        this.$router.go({query: query})
      } else if (this.mode == 'params') {
        let params = this.$route.params
        params.page = this.currentPage
        this.$router.go({name: this.routeName,params: params})
      } else {
        this.$emit('go-page' ,{
          page: this.currentPage
        })
      }
    }
  },
  watch: {
    currentPage (newVal) {
      this.jumpPage = newVal
    },
    initPage (newVal) {
      if (this.currentPage !== newVal) {
        this.currentPage = newVal
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pager-wrapper {
    margin-top: 15px;
    margin-bottom: 30px;
    text-align: center;
  }
  .pager-pages {
    display: inline-block;
    height: 32px;
    font-size: 0;
  }
  .pager-pages a:not(.active), .pager-jump a {
    cursor: pointer;
  }
  .pager-wrapper a,
  .pager-wrapper strong {
    display: inline-block;
    min-width: 32px;
    height: 32px;
    padding: 0 10px;
    margin: 0 2px;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    color: #222;
  }
  .pager-wrapper a {
    border: 1px solid #ddd;
    border-radius: 2px;
    background-color: #fff;
    transition: all .2s;
  }
  .pager-wrapper a:hover {
    color: red;
    border-color: black;
  }
  .pager-wrapper .active {
    background-color: red;
    color: #fff;
    border-color: black;
  }
  .pager-wrapper .active:hover {
    color: #fff;
  }
  .pager-jump {
    display: inline-block;
    height: 32px;
    margin-left: 20px;
  }
  .pager-jump span {
    line-height: 32px;
  }
  .pager-jump em {
    margin: 0 5px;
    font-style: normal;
  }
  .pager-jump .jump-input {
    width: 60px;
    height: 32px;
    padding: 5px;
    outline: none;
    border: 1px solid #ddd;
    font-size: 14px;
    vertical-align: top;
  }
  .pager-jump .jump-input:focus {
    border-color: red;
  }
</style>
