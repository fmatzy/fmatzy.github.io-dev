<template>
  <div>
    <div class="box">
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <a :href="post.url">{{post.title}}</a>
              <br />
              <span class="is-size-7 has-text-grey">
                <span class="has-text-weight-semibold">Published:</span>
                {{ post.created_at | formatTime }}
              </span>
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <div class="level-item">
                <div class="tags has-addons">
                  <span class="tag is-success">
                    <i class="fas fa-thumbs-up"></i>
                  </span>
                  <span class="tag">{{post.likes_count}}</span>
                </div>
              </div>
              <div class="level-item" v-for="tag in post.tags" :key="tag.name">
                <span class="tag is-grey is-rounded">{{tag.name}}</span>
              </div>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import moment from "moment";

@Component({
  filters: {
    formatTime: function(time: string): string {
      return moment(time).format("MMMM Do YYYY, h:mm:ss");
    }
  }
})
export default class Post extends Vue {
  @Prop() post;
}
</script>

<style scoped lang="scss">
.media-content {
  overflow-x: visible !important;
}
</style>
