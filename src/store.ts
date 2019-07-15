import Vue from "vue";
import Vuex from "vuex";
import MarketplaceItemModel from "./models/marketplaceItem";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {
      allItems: Array<MarketplaceItemModel>(),
      filteredItems: Array<MarketplaceItemModel>()
    },
    filter: {
      searchPhrase: ""
    }
  },
  mutations: {
    updateAllItems(state, allItems: Array<MarketplaceItemModel>) {
      state.data.allItems = allItems;
    },
    updateFilteredItems(state, filteredItems: Array<MarketplaceItemModel>) {
      state.data.filteredItems = filteredItems;
    },
    updateFilterSearchPhrase(state, newSearchPhrase: string) {
      state.filter.searchPhrase = newSearchPhrase;
    }
  },
  getters: {
    allItems: state => state.data.allItems,
    filteredItems: state => state.data.filteredItems,
    filterSearchphrase: state => state.filter.searchPhrase
  },
  actions: {
    initItemsState(context, allItems) {
      context.commit("updateAllItems", allItems);
      context.commit("updateFilteredItems", allItems);
    },
    updateFilterPassphrase(context, newSearchPhrase: string) {
      context.commit("updateFilterPassphrase", newSearchPhrase);
    }
  }
});
