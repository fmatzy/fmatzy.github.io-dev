<template>
  <div>
    <h2>GitHub Repositories</h2>
    <ol class="repos">
      <Repository v-for="repo in repos" :key="repo.id" :repo="repo"></Repository>
    </ol>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"
import axios from "axios"
import Repository from "~/components/Repository.vue"

@Component({
  components: {
    Repository
  }
})
export default class extends Vue {
  @Prop() repos

  async mounted() {
    const { data: repos } = await axios.get("https://api.github.com/users/fmatzy/repos")
    this.repos = repos
  }
}
</script>

<style scoped lang="scss">
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
}

.repos {
  list-style: none;
  padding: 0;
}
</style>
