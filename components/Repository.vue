<template>
  <div>
    <div class="media box">
      <div class="media-content">
        <div class="content">
          <p>
            <a :href="repo.html_url">{{repo.name}}</a>
            <br />
            <span class="has-text-grey">{{repo.description}}</span>
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <div class="level-item">
              <div class="tags has-addons">
                <span class="tag is-dark">
                  <i class="fas fa-star fa-fw"></i>
                </span>
                <span class="tag">{{repo.stargazers_count}}</span>
              </div>
            </div>
            <div class="level-item" v-if="repo.language">
              <span class="tag is-info is-rounded">{{repo.language}}</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class Repository extends Vue {
  @Prop() repo;
}
</script>

<style scoped lang="scss">
.media-content {
  overflow-x: visible !important;
}
</style>
