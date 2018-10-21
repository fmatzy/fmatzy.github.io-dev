<template>
  <nav class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item is-size-4" href="/">
        fmatzy.github.io
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarDefault"
      @click="burgerClicked" :class="{ 'is-active': isActive }">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarDefault" class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <a class="navbar-item" href="/"><i class="fas fa-home fa-fw"></i>Home</a>
        <a class="navbar-item" href="/repos"><i class="fab fa-github fa-fw"></i>Repos</a>
        <a class="navbar-item" href="/posts"><i class="far fa-file-alt fa-fw"></i>Posts</a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {
  Vue,
  Component,
} from "nuxt-property-decorator";

@Component({})
export default class Navbar extends Vue {
  isActive: boolean = false;

  burgerClicked(): void {
    this.isActive = !this.isActive;
  }
}
</script>

<style scoped lang="scss">
</style>
