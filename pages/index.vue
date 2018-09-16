<template>
  <About/>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from "nuxt-property-decorator"
import About from "~/components/About.vue"

@Component({
  components: {
    About
  },
})
export default class extends Vue {
}
</script>

<style scoped lang="scss">
</style>
