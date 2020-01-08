<template>
  <div>
    <div>{{ item.name }}</div>
    <div>{{ item.description }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MarketplaceItemModel from "../models/marketplaceItemModel";
import store from "@/store";
import { getItem } from "../utils/pathSegmentUtils";

@Component
export default class MarketplaceItemDetailPage extends Vue {
  beforeMount() {
    const pathSegmentItemName = this.$route.params.itemName;
    const allItems = this.$store.getters.allItems as MarketplaceItemModel[];

    // cannot find item related to path segment
    if (getItem(pathSegmentItemName, allItems) === null) {
      this.$router.push("/");
    }
  }

  get item(): MarketplaceItemModel | null {
    const pathSegmentItemName = this.$route.params.itemName;
    const allItems = this.$store.getters.allItems as MarketplaceItemModel[];
    return getItem(pathSegmentItemName, allItems);
  }
}
</script>
