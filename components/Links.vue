<template>
  <div>
    <span class="buttons">
      <a class="button is-dark is-outlined" href="https://github.com/fmatzy" target="_blank">
        <i class="fab fa-github fa-fw"></i>GitHub
      </a>
      <a class="button is-dark is-outlined" href="https://qiita.com/fmatzy" target="_blank">
        <i class="far fa-file-alt fa-fw"></i>Qiita
      </a>
      <a class="button is-dark is-outlined" href="https://twitter.com/fmatzy" target="_blank">
        <i class="fab fa-twitter fa-fw"></i>Twitter
      </a>
      <a class="button is-dark is-outlined" href="https://fmatzy.hatenablog.com/" target="_blank">
        <i class="fas fa-blog fa-fw"></i>Hatena Blog
      </a>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Links extends Vue {}
</script>
