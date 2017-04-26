<template lang='pug'>
  div.basic
    canvas.webgl-basic(ref="webgl")
    canvas.webgl-point(ref="point")
</template>

<script>
export default {
  name: 'Basic',
  data () {
    return { }
  },
  initBasic () {
    const canvas = this.$refs.webgl
    const gl = canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')

    gl.clearColor(0.0, 0.0, 0.4, 1)
    gl.clear(gl.COLOR_BUFFER_BIT)
  },
  initPoint () {
    const canvas = this.$refs.point
    const gl = canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')

    const vs_shader = `
      void main () { \n
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0); \n
        gl_PointSize = 10.0; \n
      } \n
    `
    const frag_shader = `
      void main () { \n
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); \n
      } \n
    `
    gl.clearColor(0.0, 0.0, 0.4, 1)
    gl.clear(gl.COLOR_BUFFER_BIT)
  },
  mounted () {
  }
}
</script>

<style scoped>
canvas { width:400px; height:300px; }
</style>
