<template>
    <div class="viewport" ref="viewport"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as THREE from 'three'

@Component<Viewport>({
  mounted () {
    const el = this.$refs.viewport as Element
    this.camera = new THREE.PerspectiveCamera(
      75,
      el.clientWidth / el.clientHeight,
      0.1,
      1000
    )
    this.renderer.setSize(el.clientWidth, el.clientHeight)
    el.appendChild(this.renderer.domElement)

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    new THREE.TextureLoader().load(
      '/textures/brickwall.jpg',
      (texture) => {
        console.log(texture)
        const material = new THREE.MeshBasicMaterial({ map: texture })
        // color: 0xa0522d
        const cube = new THREE.Mesh(geometry, material)

        this.scene.add(cube)
        this.camera.position.z = 5

        const animate = () => {
          requestAnimationFrame(animate)

          cube.rotation.x += 0.01
          cube.rotation.y += 0.01

          this.renderer.render(this.scene, this.camera)
        }

        animate()
      }
    )
  }
})
export default class Viewport extends Vue {
    private camera!: THREE.PerspectiveCamera
    private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer()
    private scene: THREE.Scene = new THREE.Scene()
}
</script>

<style scoped>
    .viewport {
        width: 100%;
        height: 100%;
    }
</style>
