<template>
  <div class="content">
    <h2 class="title is-2">GitHub Repositories</h2>
    <div class="columns is-multiline" v-if="repos.isReady">
      <Repository class="column is-half" v-for="repo in repos.data" :key="repo.id" :repo="repo"></Repository>
    </div>
    <Loading v-else></Loading>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { State, Action } from "vuex-class";
import axios from "axios";
import { ReposState } from "~/store/repos";
import Repository from "~/components/Repository.vue";
import Loading from "~/components/Loading.vue";

@Component({
  components: {
    Repository,
    Loading
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
