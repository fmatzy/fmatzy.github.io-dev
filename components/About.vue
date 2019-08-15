<template>
  <div>
    <h2 class="title is-2">About</h2>
    <div class="columns">
      <div class="column is-narrow">
        <figure class="image is-128x128">
          <img src="/fmatzy.jpg" />
        </figure>
      </div>
      <div class="column">
        <div class="content">
          <p>
            <span class="title is-4">fmatzy</span>
            <span class="subtitle is-6">(Yusei FUJIMATSU)</span>
          </p>

          <p>京都大学修士了。</p>
          <p>
            京都のメーカー→上京してWebエンジニア。
            <br />Go/TypeScriptを勉強中。
            <br />フルスタックなのでなんでもやります。
            <br />
          </p>
          <Links />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Links from "~/components/Links.vue";

@Component({
  components: {
    Links
  }
})
export default class About extends Vue {}
</script>
