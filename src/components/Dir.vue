<template lang='pug'>
  div.dir.left.mx4
    ul
      li.mx2.col3(v-for="page in list")
        router-link(:to="page.url") {{ page.title }}
</template>

<script>
export default {
  name: 'Dir',
  data () {
    return {
      list: [{
        url: '/',
        title: 'WebGL with Three.js'
      }, {
        url: '/basic',
        title: 'WebGL basic'
      }, {
        url: '/basic/addPoint',
        title: 'add point by click'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  text-align:left;
  margin: 0 10px;
}
</style>
