<template>
  <div class="marketplace-item">
    <div class="marketplace-item-header">
      <h3 class="marketplace-item-header__title">
        <a>{{ item.name }}</a>
      </h3>
      <span class="marketplace-item-header__source">by {{ item.author }}</span>
    </div>
    <div class="marketplace-item-content">
      <div class="marketplace-item-content__description">
        <p>{{ description }}</p>
      </div>
      <div class="marketplace-item-content__preview-image">
        <a v-bind:href="item.sourceUrl">
          <img
            style="width: 100px; height: 100px;"
            v-bind:src="item.thumbnailUrl"
            v-bind:alt="item.name"
          />
        </a>
      </div>
      <div class="marketplace-item-content__statistics"></div>
    </div>
    <div class="marketplace-item-footer">
      <button
        v-on:click="goToProject(item)"
        v-bind:href="item.sourceUrl"
        class="btn marketplace-item-content__action"
      >
        Learn more
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MarketplaceItemModel from "../models/marketplaceItemModel";
import { getPathSegmentFromItemName } from "@/utils/pathSegmentUtils";
import { MARKETPLACE_ROOT_PATH_SEGMENT } from "@/constants/routes";
import { trackItemEvent } from "@/utils/analyticsUtils";
import { TrackingEventType } from "@/models/TrackingEventType";

@Component
export default class MarketplaceItem extends Vue {
  @Prop()
  private readonly item!: MarketplaceItemModel;

  get description(): string {
    return this.item.description.length <= 160
      ? this.item.description
      : `${this.item.description.slice(0, 160)}...`;
  }

  getItemPathSegment(): string {
    return `${MARKETPLACE_ROOT_PATH_SEGMENT}/${getPathSegmentFromItemName(
      this.item.name
    )}`;
  }

  goToProject(item: MarketplaceItemModel): void {
    trackItemEvent(TrackingEventType.OpenMarketplaceExtensionDetail, item);
    this.$router.push(this.getItemPathSegment());
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

p {
  margin: 0 0 24px;
}
.marketplace-item {
  width: 290px;
  box-shadow: 0 3px 0 0 $bg-secondary-color;
}
.marketplace-item-container:hover .marketplace-item {
  box-shadow: 0 3px 0 0 #888;
  transition: all 0.15s ease-in-out;
}
.marketplace-item-header {
  height: 74px;
  text-transform: none;
  background-color: $bg-secondary-color;
  padding: 12px 20px 12px 20px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.marketplace-item-container:hover .marketplace-item-header {
  background-color: #bdbbbb;
}

.marketplace-item-header__title {
  font-size: 16px;
  text-align: left;
  font-weight: 700;
  margin: 0 0 10px;
  width: 100%;
  text-decoration: none;
}
.marketplace-item-header__title > a {
  text-decoration: none;
  color: #42388c;
}
.marketplace-item-header__source {
  float: left;
  text-align: left;
}
.marketplace-item-header__source > a {
  color: $text-primary-color;
  float: left;
}
.marketplace-item-content {
  padding: 12px 20px 12px 20px;
  background-color: $bg-primary-color;
}
.marketplace-item-content__description {
  overflow: hidden;
  height: 120px;
  max-width: 100%;
  margin: 0 0 30px 0;
  text-align: left;
}
.marketplace-item-content__preview-image {
  display: inline-block;
  width: 30%;
}
.marketplace-item-content__statistics {
  display: inline-block;
  width: 70%;
}
.marketplace-item-container:hover .btn {
  background-color: #42388c;
  color: #fff;
}
.marketplace-item-content__action {
  text-decoration: none;
  width: 87%;
  margin: 6px 0 6px 0;
}
.marketplace-item-footer {
  height: 60px;
  background-color: $bg-primary-color;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
</style>
