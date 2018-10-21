<template>
  <div class="content">
    <h2 class="title is-2">Links</h2>
    <span class="buttons">
      <a class="button is-dark is-outlined" href="https://github.com/fmatzy">GitHub</a>
      <a class="button is-dark is-outlined" href="https://qiita.com/fmatzy">Qiita</a>
      <a class="button is-dark is-outlined" href="https://twitter.com/fmatzy">Twitter</a>
      <a class="button is-dark is-outlined" href="https://fmatzy.hatenablog.com/">Hatena Blog</a>
    </span>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from "nuxt-property-decorator"

@Component({})
export default class Links extends Vue {
}
</script>
