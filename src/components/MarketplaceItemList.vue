<template>
  <div id="marketplace-item-list" class="marketplace-item-list">
    <div
      class="marketplace-item-detail-container"
      v-for="(item, index) in itemsToShow"
      v-bind:key="`item.name-${index}`"
    >
      <MarketplaceItemDetail v-bind:item="item" />
    </div>
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
import { addNextPage } from "../helpers/pager";

@Component({
  components: {
    MarketplaceItemDetail
  }
})
export default class MarketplaceItemList extends Vue {
  get itemsToShow(): MarketplaceItemModel[] {
    return this.$store.getters.itemsToShow;
  }

  mounted() {
    this.scroll();
  }

  scroll() {
    window.onscroll = () => {
      let listingElement = document.getElementById("marketplace-item-list");
      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight +
          1 >=
        document.documentElement.scrollHeight
      ) {
        this.$store.dispatch(addPageAction, {});
      }
    };
  }
}
</script>

<style scoped lang="scss">
.marketplace-item-list {
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
}
.marketplace-item-detail-container {
  max-width: 310px;
  min-width: 280px;
  margin: 0 10px 18px 10px;
}
</style>
