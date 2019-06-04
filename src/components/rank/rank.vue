<template>
    <div class="g-bd4 fcb">
      <list></list>
      <home></home>
    </div>
</template>

<script>
import List from './components/list.vue'
import Home from './components/home.vue'
export default {
  name: 'Rank',
  components: {
    List,
    Home
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
