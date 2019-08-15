<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">GitHub Repositories</h2>
      <div class="columns is-multiline" v-if="repos.isReady">
        <Repository v-for="repo in repos.data" :key="repo.id" :repo="repo"></Repository>
      </div>
      <div v-else class="is-loading has-text-justified">Now loading...</div>
    </div>
  </section>
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
  @State("repos") repos!: ReposState;
  @Action("fetchData", { namespace: "repos" }) fetchData: any;

  async mounted() {
    this.fetchData();
  }
}
</script>

<style scoped lang="scss">
</style>
