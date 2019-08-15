<template>
  <main>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-1 is-offset-2-desktop">
            <About />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import About from "~/components/About.vue";

@Component({
  components: {
    About,
  }
})
export default class extends Vue {}
</script>

<style scoped lang="scss">
</style>
