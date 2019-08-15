<template>
  <div class="content">
    <h2 class="title is-2">Recently Qiita Posts</h2>
    <template v-if="posts.isReady">
      <div class="columns is-multiline" v-if="posts.data.length">
        <Post class="column is-half" v-for="post in posts.data" :key="post.id" :post="post"></Post>
      </div>
      <div v-else>
        <i class="fas fa-exclamation-circle fa-fw"></i> No items found.
      </div>
    </template>
    <Loading v-else></Loading>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { State, Action } from "vuex-class";
import axios from "axios";
import Post from "~/components/Post.vue";
import Loading from "~/components/Loading.vue";
import { PostsState } from "store/posts";

@Component({
  components: {
    Post,
    Loading
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
