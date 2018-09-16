<template>
  <div>
    <Navbar/>
    <b-container fluid id="main-content">
      <nuxt/>
    </b-container>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import Navbar from '~/components/Navbar.vue'

@Component({
  components: {
    Navbar
  }
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
#main-content {
  padding: 1rem;
}
</style>
