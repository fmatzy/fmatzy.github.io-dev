<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">Recently Qiita Posts</h2>
      <div class="columns is-multiline" v-if="posts.isReady">
        <Post v-for="post in posts.data" :key="post.id" :post="post"></Post>
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
import Post from "~/components/Post.vue"
import { PostsState } from "store/posts";

@Component({
  components: {
    Post
  }
})
export default class extends Vue {
  @State("posts") posts!: PostsState;
  @Action("fetchData", { namespace: "posts" }) fetchData: any;

  async mounted() {
    this.fetchData();
  }
}
</script>

<style scoped lang="scss">
</style>
