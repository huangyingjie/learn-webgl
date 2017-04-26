<template>
  <div id="app" class="clearfix">
    <dir></dir>
    <div style="overflow:auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Dir from './components/Dir'

export default {
  name: 'app',
  components: {
    Dir
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
