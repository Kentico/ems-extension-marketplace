<template>
  <div class="marketplace-filter">
    <div class="marketplace-search">
      <input
        v-model="searchPhrase"
        v-on:keyup.enter="search"
        type="text"
        class="marketplace-search__input"
      />
      <button class="marketplace-search__search-button" v-on:click="search">
        <font-awesome-icon icon="search" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import MarketplaceItem from "../models/marketplaceItem";

library.add(faSearch);

@Component({
  components: {
    FontAwesomeIcon
  }
})
export default class MarketplaceFilter extends Vue {
  private searchPhrase: string = "";

  search() {
    const oldFilteredItems: Array<MarketplaceItem> = this.$store.getters
      .filteredItems;
    const filteredItems = oldFilteredItems.filter(item => {
      item.name.includes(this.searchPhrase) ||
        item.description.includes(this.searchPhrase) ||
        item.source.includes(this.searchPhrase);
    });
    this.$store.commit("updateFilteredItems", filteredItems);
  }
}
</script>

<style scoped lang="scss">
.marketplace-filter {
  padding: 30px 0 30px 0;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  width: 100%;
}
.marketplace-search {
  height: 40px;
  display: block;
  background-color: #fff;
  width: 286px;
}
.marketplace-search__input {
  float: left;
  border: none;
  border-radius: 4px 0 0 4px;
  outline: 0;
  line-height: 1.2;
  font-size: 14px;
  width: 246px;
  height: 40px;
  color: #262524;
  vertical-align: middle;
  background-color: #fff;
  padding: 7px 10px;
  box-sizing: border-box;
}
.marketplace-search__input:focus {
  border-color: #7382bf;
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(115, 130, 191, 0.6);
}
.marketplace-search__search-button {
  width: 40px;
  height: 40px;
  float: right;
  background: 0 0;
  border-radius: 0 4px 4px 0;
  position: relative;
  padding: 1px 6px;
  border: none;
  box-shadow: none;
}
</style>
