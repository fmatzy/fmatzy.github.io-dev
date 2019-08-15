<template>
  <main>
    <div class="section">
      <div class="container">
        <Repositories />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import Repositories from "~/components/Repositories.vue";

@Component({
  components: {
    Repositories
  }
})
export default class extends Vue {
}
</script>
