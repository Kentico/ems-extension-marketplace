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

@Component
export default class MarketplaceItemDetailPage extends Vue {
  beforeMount() {
    const allItems = this.$store.getters.allItems as MarketplaceItemModel[];
    if (this.getItem() === null) {
      this.$router.push("/");
    }
  }

  get item(): MarketplaceItemModel | null {
    const allItems = this.$store.getters.allItems as MarketplaceItemModel[];
    return this.getItem();
  }

  getItem(): MarketplaceItemModel | null {
    const itemName = this.$route.params.itemName;
    const allItems = this.$store.getters.allItems as MarketplaceItemModel[];
    const item = allItems.find(i => i.name === "Dynamic Routing (MVC Only)");
    return item ? item : null;
  }
}
</script>
