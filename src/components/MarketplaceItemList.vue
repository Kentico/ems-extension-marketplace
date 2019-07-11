<template>
<div id="wrapper" style="height: 400px; overflow: auto;">
  <div id="marketplace-item-list" class="marketplace-item-list">
    <div
      class="marketplace-item-detail-container"
      v-for="(item, index) in pagedItems"
      v-bind:key="`item.name-${index}`"
    >
      <MarketplaceItemDetail v-bind:item="item"/>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MarketplaceItemDetail from "./MarketplaceItemDetail.vue";
import MarketplaceItem from "../models/marketplaceItem";

@Component({
  components: {
    MarketplaceItemDetail
  }
})
export default class MarketplaceItemList extends Vue {
  @Prop()
  private msg!: string;

  private readonly pageSize: number = 8;
  private lastItemIndex: number = 0;
  private allItems: MarketplaceItem[] = new Array();
  private pagedItems: MarketplaceItem[] = new Array();

  beforeMount() {
    fetch(
      "https://raw.githubusercontent.com/Kentico/devnet.kentico.com/master/marketplace/manifest.json" +
        "?t=" +
        new Date().valueOf()
    ).then(response => {
      return response.json().then(json => {
        this.allItems = json as MarketplaceItem[];
        this.pagedItems = this.allItems.slice(0, this.pageSize);
        this.lastItemIndex = this.pageSize - 1;
      });
    });
  }

  mounted() {
    this.scroll();
  }

  scroll() {
    window.onscroll = () => {
      let wrapperElement = document.getElementById("wrapper");
      let listingElement = document.getElementById("marketplace-item-list");
      if(wrapperElement!.scrollTop + wrapperElement!.offsetHeight > listingElement!.offsetHeight) {
        console.log('end of scroll');
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
