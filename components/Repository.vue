<template>
  <li class="repository">
    <span class="name"><a :href="repo.html_url">{{repo.name}}</a></span>
    <span class="description">{{repo.description}}</span>
  </li>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component({})
export default class Repository extends Vue {
  @Prop() repo
}
</script>

<style scoped lang="scss">
.repository {
  padding: 1rem;
  margin: 0 0 0.2rem 0;
  border-top: 1px solid #e8e8e8;

  .name {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .description {
    display: block;
  }
}
</style>
