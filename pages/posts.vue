<template>
  <main>
    <div class="section">
      <div class="container">
        <Posts />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import Posts from "~/components/Posts.vue";

@Component({
  components: {
    Posts
  }
})
export default class extends Vue {
}
</script>
