<template lang='pug'>
  div.basic
    canvas.webgl-basic(ref="webgl")
    canvas.webgl-point.mx2(ref="point")
</template>

<script>
const { initShaders } = window

export default {
  name: 'Basic',
  data () {
    return { }
  },
  methods: {
    initBasic () {
      const canvas = this.$refs.webgl
      const gl = canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl')

      gl.clearColor(0.0, 0.7, 0.8, 1)
      gl.clear(gl.COLOR_BUFFER_BIT)
    },
    initPoint () {
      const canvas = this.$refs.point
      const gl = canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl')

      const vsShader = `
        void main () { \n
          gl_Position = vec4(-0.5, 0.0, 0.0, 1.0); \n
          gl_PointSize = 20.0; \n
        } \n
      `
      const fragShader = `
        void main () { \n
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); \n
        } \n
      `
      if (!initShaders(gl, vsShader, fragShader)) {
        console.log('init shader error')
        return
      }
      gl.clearColor(0.0, 0.1, 0.2, 0.6)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.POINT, 0, 1)
    }
  },
  mounted () {
    this.initBasic()
    this.initPoint()
  }
}
</script>

<style scoped>
canvas { width:400px; height:300px; }
</style>
