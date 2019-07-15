import Vue from "vue";
import Vuex from "vuex";
import MarketplaceItem from "./models/marketplaceItem";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allItems: Array<MarketplaceItem>(),
    filteredItems: Array<MarketplaceItem>()
  },
  mutations: {
    updateAllItems(state, allItems: Array<MarketplaceItem>) {
      state.allItems = allItems;
    },
    updateFilteredItems(state, filteredItems: Array<MarketplaceItem>) {
      state.filteredItems = filteredItems;
    }
  },
  getters: {
    allItems: state => state.allItems,
    filteredItems: state => state.filteredItems
  },
  actions: {}
});
