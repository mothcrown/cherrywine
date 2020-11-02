<template>
    <div class="viewport" ref="viewport"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

@Component<Viewport>({
  mounted () {
    const viewport = this.$refs.viewport as Element
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    viewport.appendChild(this.renderer.domElement)
    this.camera = new THREE.PerspectiveCamera(
      45,
      viewport.clientWidth / viewport.clientHeight,
      1,
      10000
    )
    const controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.camera.position.set(1, 1, 1)

    const axesHelper = new THREE.AxesHelper(5)
    let geometry = new THREE.BoxGeometry(5, 5, 5)
    new THREE.TextureLoader().load(
      '/textures/brickwall.jpg',
      (texture) => {
        const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.BackSide })
        new THREE.TextureLoader().load(
          '/textures/empty.jpg',
          (empty) => {
            const material1 = new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, alphaMap: empty })
            this.scene.add(axesHelper)
            // color: 0xa0522d
            const cube = new THREE.Mesh(geometry, [
              material, material, material, material, material1, material
            ])
            this.scene.add(cube)

            geometry = new THREE.BoxGeometry(5, 5, 5)

            const cube1 = new THREE.Mesh(geometry, [
              material, material, material, material, material1, material1
            ])
            cube1.position.z += 5
            this.scene.add(cube1)

            const cube2 = new THREE.Mesh(geometry, [
              material, material, material, material, material, material1
            ])
            cube2.position.z += 10
            this.scene.add(cube2)

            const animate = () => {
              requestAnimationFrame(animate)
              controls.update()
              this.renderer.render(this.scene, this.camera)
            }
            animate()
          }
        )
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
        height: 100vh;
    }
</style>
