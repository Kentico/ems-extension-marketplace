<template>
  <div id="app">
    <div class="marketplace">
      <MarketplaceFilter />
      <MarketplaceItemList />
      <SubmitNewItem />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MarketplaceItemList from "./components/MarketplaceItemList.vue";
import SubmitNewItem from "./components/SubmitNewItem.vue";
import MarketplaceFilter from "./components/MarketplaceFilter.vue";
import { initItemsStateAction } from "./store";
import MarketplaceItemModel from "./models/marketplaceItemModel";
import store from "./store";
import { initStoreWithTags } from "./utils/tags";
import { initStoreWithItems } from "./utils/items";
import { initStoreWithCategories } from "./utils/categories";

@Component({
  store,
  components: {
    MarketplaceItemList,
    MarketplaceFilter,
    SubmitNewItem
  }
})
export default class App extends Vue {
  beforeMount() {
    fetch(
      "https://raw.githubusercontent.com/Kentico/devnet.kentico.com/master/marketplace/extensions.json" +
        "?t=" +
        new Date().valueOf()
    ).then(response => {
      return response.json().then(json => {
        const allItems = json as MarketplaceItemModel[];
        allItems.sort((a: MarketplaceItemModel, b: MarketplaceItemModel) =>
          a.name.localeCompare(b.name)
        );
        initStoreWithItems(allItems);
        initStoreWithTags(allItems);
        initStoreWithCategories(allItems);
      });
    });
  }
}
</script>

<style scoped lang="scss">
.marketplace {
  background-color: #f4f4f4;
}
</style>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btn {
  display: inline-block;
  padding: 9px 20px 8px;
  margin-bottom: 0;
  font-size: 16px;
  line-height: 1.5;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  user-select: none;
  text-decoration: none;
  color: #262524;
  background-color: #d6d6d6;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease-in-out;
  width: 71%;
}
.btn:hover {
  background-color: #42388c;
  color: #fff;
}
.btn:focus {
  outline:none;
}
.btn--justified {
  width: 100%;
}
.btn--common {
  color: #262524;
  background-color: #e3e3e3;
  border-color: #e3e3e3;
  box-shadow: 0 3px 0 0 #d6d6d6;
}
</style>
