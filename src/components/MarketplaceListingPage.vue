<template>
  <div>
    <MarketplaceFilter />
    <MarketplaceItemList />
    <SubmitNewItem />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

Component.registerHooks(["beforeRouteEnter"]);

import MarketplaceItemList from "./MarketplaceItemList.vue";
import SubmitNewItem from "./SubmitNewItem.vue";
import MarketplaceFilter from "./MarketplaceFilter.vue";
import { initializeStoreWithItemsAndNavigateNext } from "./../store";

@Component({
  components: {
    MarketplaceItemList,
    MarketplaceFilter,
    SubmitNewItem
  }
})
export default class MarketplaceListingPage extends Vue {
  beforeRouteEnter(to: any, from: any, next: any) {
    initializeStoreWithItemsAndNavigateNext(next);
  }
}
</script>
