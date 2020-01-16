<template>
  <div class="detail-page">
    <div class="heading-container">
      <div class="title">
        <h2>{{ item.name }}</h2>
      </div>
      <div class="author">by {{ item.author }}</div>
    </div>
    <div class="content-container">
      <div class="left-panel">
        <div class="thumbnail-container">
          <img v-bind:src="item.thumbnailUrl" />
        </div>
        <div class="categories-container">
          <h3>Category</h3>
          <p>{{ item.category }}</p>
        </div>
        <button
          v-on:click="goToProject(item)"
          v-bind:data-tracking-label="item.name"
          v-bind:href="item.sourceUrl"
          class="btn btn--cta item-action-button"
        >
          Take me to the Project
        </button>
      </div>
      <div class="right-panel">
        <div class="description-container">
          <h3>Description</h3>
          <p>{{ item.description }}</p>
        </div>
        <div class="kentico-versions-container">
          <h3>Works with Kentico versions</h3>
          <span
            v-for="version in item.kenticoVersions"
            v-bind:key="version"
            class="version-caption"
            >{{ version }}</span
          >
        </div>
        <div class="version-container">
          <h3>Version</h3>
          <p>{{ item.version }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

Component.registerHooks(["beforeRouteEnter"]);

import MarketplaceItemModel from "../models/marketplaceItemModel";
import store, { initializeStoreWithItemsAndNavigateNext } from "@/store";
import { getItem } from "../utils/pathSegmentUtils";
import { MARKETPLACE_ROOT_PATH_SEGMENT } from "@/constants/routes";

@Component
export default class MarketplaceItemDetailPage extends Vue {
  beforeRouteEnter(to: any, from: any, next: any) {
    initializeStoreWithItemsAndNavigateNext(next);
  }
  beforeMount() {
    const pathSegmentItemName = this.$route.params.itemName;
    const allItems = this.$store.getters.allItems as MarketplaceItemModel[];

    // cannot find item related to path segment
    if (getItem(pathSegmentItemName, allItems) === null) {
      this.$router.push(MARKETPLACE_ROOT_PATH_SEGMENT);
    }
  }
  created () {
    const renderedItem = this.item!;
    document.title = renderedItem.name;
    (document.head.querySelector('meta[name="description"]') as any).content = renderedItem.description;
  }

  get item(): MarketplaceItemModel | null {
    const pathSegmentItemName = this.$route.params.itemName;
    const allItems = this.$store.getters.allItems as MarketplaceItemModel[];
    return getItem(pathSegmentItemName, allItems);
  }

  goToProject(item: MarketplaceItemModel): void {
    if (window && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "event",
        eventCategory: "Link",
        eventAction: "open-marketplace-extension",
        eventLabel: `${item.category};${item.name}`
      });
    }

    window.open(item.sourceUrl, "_blank");
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

h3 {
  margin-bottom: 0px;
  color: $text-primary-color;
}
p {
  margin-top: 4px;
  color: $text-primary-color;
}
.detail-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  border-radius: 4px;
}
.heading-container {
  background-color: $bg-secondary-color;
  width: 100%;
  text-align: left;
  padding-left: 12px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.title h2 {
  margin: 12px 0 0 0;
  color: $text-primary-color;
}
.author {
  font-size: 16px;
  margin: 12px 0 12px 0;
}
.content-container {
  display: flex;
  width: 100%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: $bg-primary-color;
  padding: 12px 0 4px 0;
}
.left-panel {
  width: 40%;
}
.right-panel {
  width: 60%;
  text-align: left;
}
.thumbnail-container {
  margin: 20px 0 10px 0;
}
.description-container {
  margin-top: 20px;
}
.categories-container {
    text-align: left;
    padding-left: 12px;
}
.item-action-button {
  margin: 10px 0 10px 0;
}

.version-caption {
  display: inline-block;
  border-radius: 4px;
  background-color: $bg-secondary-color;
  color: #282828;
  padding: 6px 10px;
  font-size: 16px;
  text-align: center;
  margin: 4px 6px 2px 0;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  vertical-align: baseline;
  text-decoration: none;
  text-transform: lowercase;
}
</style>
