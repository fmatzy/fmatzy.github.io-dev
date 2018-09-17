<template>
  <li class="post">
    <span class="title"><a :href="post.url">{{post.title}}</a></span>
    <span class="created">{{ post.created_at | formatTime }}</span>
  </li>
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
.post {
  padding: 1rem;
  margin: 0 0 0.2rem 0;
  border-top: 1px solid #e8e8e8;

  .title {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .created {
    display: block;
    font-size: 0.8rem;
    color: gray;
  }
}
</style>
