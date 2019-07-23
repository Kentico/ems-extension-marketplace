<template>
  <div>
    <div id="marketplace-item-list" class="marketplace-item-list">
      <div
        class="marketplace-item-detail-container"
        v-for="(item, index) in itemsToShow"
        v-bind:key="`item.name-${index}`"
      >
        <MarketplaceItemDetail v-bind:item="item" />
      </div>
    </div>
    <LoadMoreButton v-if="isShowMoreButtonVisible" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MarketplaceItemDetail from "./MarketplaceItemDetail.vue";
import store, {
  updateAllItemsMutation,
  updateFilteredItemsMutation,
  addPageAction
} from "@/store";
import MarketplaceItemModel from "../models/marketplaceItemModel";
import { addNextPage } from "../utils/pager";
import LoadMoreButton from "./LoadMoreButton.vue";

@Component({
  components: {
    MarketplaceItemDetail,
    LoadMoreButton
  }
})
export default class MarketplaceItemList extends Vue {
  get itemsToShow(): MarketplaceItemModel[] {
    return this.$store.getters.itemsToShow;
  }
  get isShowMoreButtonVisible() {
    return this.$store.getters.itemsToShow < this.$store.getters.filteredItems;
  }
}
</script>

<style scoped lang="scss">
.marketplace-item-list {
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
}
.marketplace-item-detail-container {
  max-width: 290px;
  margin: 0 10px 18px 0;
}
</style>
