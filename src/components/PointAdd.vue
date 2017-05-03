<template lang='pug'>
  div.basic
    canvas.webgl-basic(ref="point" @mousedown="onClick" width="400" height="400")
</template>

<script>
const { initShaders } = window

export default {
  name: 'Basic',
  data () {
    return { gl: null, canvas: null, glPoints: [], a_Position: null }
  },
  methods: {
    onClick (ev) {
      /* eslint camelcase:0 */
      const { gl, canvas } = this
      let x = ev.clientX // x coordinate of a mouse pointer
      let y = ev.clientY // y coordinate of a mouse pointer
      const rect = ev.target.getBoundingClientRect()
      x = ((x - rect.left) - canvas.clientWidth / 2) / (canvas.clientWidth / 2)
      y = -((y - rect.top) - canvas.clientHeight / 2) / (canvas.clientHeight / 2)
      this.glPoints.push(x)
      this.glPoints.push(y)
      gl.clear(gl.COLOR_BUFFER_BIT)
      // gl.vertexAttrib3f(this.a_Position, x, y, 0.0)
      // gl.drawArrays(gl.POINTS, 0, 1)
      var len = this.glPoints.length
      for (var i = 0; i < len; i += 2) {
        gl.vertexAttrib3f(this.a_Position, this.glPoints[i], this.glPoints[i + 1], 0.0)
        gl.drawArrays(gl.POINTS, 0, 1)
      }
    },
    initPoint () {
      const canvas = this.canvas = this.$refs.point
      const gl = this.gl = window.getWebGLContext(canvas)
      if (!gl) {
        return
      }

      const vsShader = `
        attribute vec4 a_Position; \n
        void main () { \n
          gl_Position = a_Position; \n
          gl_PointSize = 10.0; \n
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
      this.a_Position = gl.getAttribLocation(gl.program, 'a_Position')
/*
      const addPoint = () => {
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.vertexAttrib3f(this.a_Position, Math.random(), Math.random(), 0.0)
        gl.drawArrays(gl.POINTS, 0, 1)
        requestAnimationFrame(addPoint)
      }
      requestAnimationFrame(addPoint)
*/
    }
  },
  mounted () {
    this.initPoint()
  }
}
</script>

<style scoped>
canvas { width:400px; height:400px; }
</style>
