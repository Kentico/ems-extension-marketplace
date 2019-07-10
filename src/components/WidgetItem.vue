<template>
  <div class="marketplace-item">
    <div class="marketplace-item-header">
      <h3 class="marketplace-item-header__title">
        <a v-bind:href="item.sourceUrl">{{ item.name }}</a>
      </h3>
      <span class="marketplace-item-header__source">by {{ item.source }}</span>
    </div>
    <div class="marketplace-item-content">
      <div class="marketplace-item-content__description">
        <p>{{ item.description }}</p>
      </div>
      <div class="marketplace-item-content__preview-image">
        <a v-bind:href="item.sourceUrl">
          <img
            style="width: 100px; height: 100px;"
            v-bind:src="item.thumbnailUrl"
            v-bind:alt="item.name"
          >
        </a>
      </div>
      <a v-bind:href="item.sourceUrl" class="btn marketplace-item-content_preview-image">
        <i class="fa" aria-hidden="true"></i> &nbsp; take me to the
        Project
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MarketplaceItem from "../models/marketplaceItem";

@Component
export default class WidgetItem extends Vue {
  @Prop(MarketplaceItem) private readonly item!: MarketplaceItem;
}
</script>

<style scoped lang="scss">
.marketplace-item {
  width: 33%;
}
.marketplace-item-content__description {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 300px;
    max-width: 100%;
    margin: 30px;
}
</style>
