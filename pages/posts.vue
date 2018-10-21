<template>
  <div>
    <h2>Recently Qiita Posts</h2>
    <ol class="posts" v-if="posts.isReady">
      <Post v-for="post in posts.data" :key="post.id" :post="post"></Post>
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
import Post from "~/components/Post.vue"
import { PostsState } from "store/posts";

@Component({
  components: {
    Post
  }
})
export default class extends Vue {
  @State("posts") posts: PostsState;
  @Action("fetchData", { namespace: "posts" }) fetchData: any;

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

.posts {
  list-style: none;
  padding: 0;
}
</style>
