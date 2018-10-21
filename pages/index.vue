<template>
  <section class="section">
    <div class="container">
      <About/>
      <br>
      <Links/>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from "nuxt-property-decorator"
import About from "~/components/About.vue"
import Links from "~/components/Links.vue"

@Component({
  components: {
    About,
    Links,
  },
})
export default class extends Vue {
}
</script>

<style scoped lang="scss">
</style>
