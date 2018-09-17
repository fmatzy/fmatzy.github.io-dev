<template>
  <div>
    <h2>Recently Qiita Posts</h2>
    <ol class="posts">
      <Post v-for="post in posts" :key="post.id" :post="post"></Post>
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
import Post from "~/components/Post.vue"

@Component({
  components: {
    Post
  }
})
export default class extends Vue {
  @Prop() posts

  async mounted() {
    const { data: posts } = await axios.get("https://qiita.com/api/v2/users/fmatzy/items?page=1&per_page=10")
    this.posts = posts
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
