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
import MarketplaceItem from "../models/marketplaceItem";
import store, { updateAllItemsMutation, updateFilteredItemsMutation } from "@/store";

@Component({
  components: {
    MarketplaceItemDetail
  }
})
export default class MarketplaceItemList extends Vue {
  // private itemsToShowInternal: Array<MarketplaceItem> = new Array();

  // private readonly pageSize: number = 8;
  // private lastItemIndex: number = 0;
  // private allItems: MarketplaceItem[] = new Array();

  get itemsToShow(): MarketplaceItem[] {
    return store.getters.filteredItems;
  }

  // set itemsToShow(items: MarketplaceItem[]) {
  //   this.itemsToShowInternal = items;
  // }

  beforeMount() {
    fetch(
      "https://raw.githubusercontent.com/Kentico/devnet.kentico.com/master/marketplace/manifest.json" +
        "?t=" +
        new Date().valueOf()
    ).then(response => {
      return response.json().then(json => {
        // this.allItems = json as MarketplaceItem[];
        // this.itemsToShow = this.allItems.slice(0, this.pageSize);
        // this.lastItemIndex = this.pageSize - 1;
        this.$store.commit(updateAllItemsMutation, json as MarketplaceItem[]);
        this.$store.commit(updateFilteredItemsMutation, json as MarketplaceItem[]);
      });
    });
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
        this.appendNextPage();
      }
    };
  }

  appendNextPage() {
    // this.itemsToShow = this.itemsToShow.concat(
    //   this.allItems.slice(
    //     this.lastItemIndex,
    //     this.lastItemIndex + this.pageSize
    //   )
    // );
    // this.lastItemIndex = this.lastItemIndex + this.pageSize;
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
