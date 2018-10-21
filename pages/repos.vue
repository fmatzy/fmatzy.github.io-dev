<template>
  <div>
    <h2>GitHub Repositories</h2>
    <ol class="repos" v-if="repos.isReady">
      <Repository v-for="repo in repos.data" :key="repo.id" :repo="repo"></Repository>
    </ol>
    <p v-else>Now loading...</p>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"
import {
  State,
  Action,
} from "vuex-class"
import axios from "axios"
import { ReposState } from "~/store/repos"
import Repository from "~/components/Repository.vue"

@Component({
  components: {
    Repository
  }
})
export default class extends Vue {
  @State("repos") repos: ReposState;
  @Action("fetchData", { namespace: "repos" }) fetchData: any;

  async mounted() {
    this.fetchData();
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
