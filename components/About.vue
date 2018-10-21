<template>
  <div class="content">
    <h2 class="title is-2">About</h2>
    <p>
      <strong>fmatzy</strong> (Yusei FUJIMATSU)
    </p>
    <p>
      某メーカーにてIoTっぽいことをやっています。
      <br>
      Go/Ruby/TypeScriptについて勉強中。
    </p>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from "nuxt-property-decorator"
import Links from "~/components/Links.vue"

@Component({
  components: {
    Links
  },
})
export default class About extends Vue {
}
</script>
