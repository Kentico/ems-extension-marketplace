<template>
  <div class="marketplace-item" v-on:click="goTo(item.sourceUrl)">
    <div class="marketplace-item-header">
      <h3 class="marketplace-item-header__title">
        <a v-bind:href="item.sourceUrl">{{ item.name }}</a>
      </h3>
      <span class="marketplace-item-header__source">by {{ item.source }}</span>
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
      <a
        v-bind:href="item.sourceUrl"
        class="btn marketplace-item-content__action"
        >Take me to the Project</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MarketplaceItemModel from "../models/marketplaceItemModel";

@Component
export default class MarketplaceItemDetail extends Vue {
  @Prop()
  private readonly item!: MarketplaceItemModel;

  get description(): string {
    return this.item.description.length <= 160
      ? this.item.description
      : `${this.item.description.slice(0, 160)}...`;
  }

  goTo(url: string): void {
    window.open(url);
  }
}
</script>

<style scoped lang="scss">
.marketplace-item {
  width: 100%;
  box-shadow: 0 3px 0 0 #d6d6d6;
}
.marketplace-item-detail-container:hover .marketplace-item {
  box-shadow: 0 3px 0 0 #888;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
}
.marketplace-item-header {
  height: 74px;
  text-transform: none;
  background-color: #d6d6d6;
  padding: 12px 20px 12px 20px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.marketplace-item-detail-container:hover .marketplace-item-header {
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
}
.marketplace-item-header__source > a {
  color: #262524;
  float: left;
}
.marketplace-item-content {
  padding: 12px 20px 12px 20px;
  background-color: #e3e3e3;
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
.marketplace-item-detail-container:hover .btn {
  background-color: #42388c;
  color: #fff;
}
.marketplace-item-content__action {
  text-decoration: none;
}
.marketplace-item-footer {
  height: 60px;
  background-color: #e3e3e3;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
</style>
