<template>
  <div class="column is-half">
    <div class="box">
      <div calss="content">
        <p>
          <a class="is-size-5" :href="post.url">{{post.title}}</a>
          <br>
          <span class="is-size-7 is-text-grey">{{ post.created_at | formatTime }}</span>
        </p>
      </div>
      <p class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <div class="tags has-addons">
              <span class="tag is-success"><i class="fas fa-thumbs-up"></i></span>
              <span class="tag">{{post.likes_count}}</span>
            </div>
          </div>
          <div class="level-item" v-for="tag in post.tags" :key="tag.name">
            <span class="tag is-grey is-rounded">{{tag.name}}</span>
          </div>
        </div>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"
import moment from "moment"

@Component({
  filters: {
    formatTime: function(time: string): string {
      return moment(time).format('MMMM Do YYYY, h:mm:ss')
    }
  }
})
export default class Post extends Vue {
  @Prop() post
}
</script>

<style scoped lang="scss">
</style>
