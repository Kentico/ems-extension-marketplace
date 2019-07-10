<template>
  <div class="marketplace-item-list">
    <div v-for="(item, index) in items" v-bind:key="`item.name-${index}`">
      <MarketplaceItemDetail v-bind:item="item"/>
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
  @Prop() private msg!: string;
  private items: MarketplaceItem[] = new Array() as MarketplaceItem[];

  created() {
    fetch(
      "https://raw.githubusercontent.com/Kentico/devnet.kentico.com/master/marketplace/manifest.json" +
        "?t=" +
        new Date().valueOf()
    ).then(response => {
      return response.json().then(json => {
        this.items = json as MarketplaceItem[];
      });
    });
  }
}
</script>

<style scoped lang="scss">
.marketplace-item-list {
  display: flex;
  justify-content: space-between;
  flex-flow: column wrap;
}
</style>
