<template>
  <div class="home">
    <Viewport />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Viewport from '@/components/Viewport.vue'

@Component({
  components: {
    Viewport
  }
})
export default class Home extends Vue {}
</script>

<style scoped>
  .home {
    height: 100%;
  }
</style>
