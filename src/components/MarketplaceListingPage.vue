<template>
  <div>
    <MarketplaceFilter />
    <MarketplaceItemList />
    <SubmitNewItem />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MarketplaceItemList from "./MarketplaceItemList.vue";
import SubmitNewItem from "./SubmitNewItem.vue";
import MarketplaceFilter from "./MarketplaceFilter.vue";

@Component({
  components: {
    MarketplaceItemList,
    MarketplaceFilter,
    SubmitNewItem
  }
})
export default class MarketplaceListingPage extends Vue {}
</script>
