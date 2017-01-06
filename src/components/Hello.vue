<template>
  <div class="hello">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
/* global requestAnimationFrame */
import THREE from 'three'
import logo from '../assets/logo.png'

let currentTime = Date.now()
export default {
  name: 'hello',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    run () {
      const duration = 5000
      const animate = () => {
        const now = Date.now()
        const deltat = now - currentTime
        currentTime = now
        const fract = deltat / duration
        const angle = Math.PI * 2 * fract
        this.cube.rotation.y += angle
      }
      requestAnimationFrame(() => {
        this.run()
      })
      this.renderer.render(this.scene, this.camera)
      animate()
    }
  },
  mounted () {
    const { canvas } = this.$refs
    const render = this.renderer = new THREE.WebGLRenderer({
      canvas, antialias: true
    })
    render.setSize(canvas.width, canvas.height)
    const scene = this.scene = new THREE.Scene()
    const camera = this.camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 1, 4000)
    scene.add(camera)

    const loader = new THREE.TextureLoader()
    const map = loader.load(logo)
    const material = new THREE.MeshBasicMaterial({ map })
    const geometry = new THREE.CubeGeometry(2, 2, 2)
    const cube = this.cube = new THREE.Mesh(geometry, material)

    cube.position.z = -8
    cube.rotation.x = Math.PI / 5
    cube.rotation.y = Math.PI / 5

    scene.add(cube)
    this.run()
  }
}
</script>

<style scoped>
canvas { width:300px; height:300px; }
</style>
