<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Navbar from "~/components/Navbar.vue";

@Component({
  components: {
    Navbar
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
</style>
