<template lang='pug'>
  div.hello
    ul.clearfix.mx4(v-for="page in list")
      li.left.mx2
        router-link(:to="page.url") {{ page.title }}
</template>

<script>
export default {
  name: 'Dir',
  data () {
    return {
      list: [{
        url: '/basic',
        title: 'WebGL basic'
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
  display: inline-block;
  margin: 0 10px;
}
</style>
