<template>
  <b-navbar toggleable="sm" type="dark" variant="dark">
    <b-navbar-brand href="/">fmatzy.github.io</b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/repos">Repos</b-nav-item>
          <b-nav-item href="/posts">Posts</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { Vue } from "nuxt-property-decorator"
export default class Navbar extends Vue {
}
</script>

<style scoped lang="scss">
</style>
