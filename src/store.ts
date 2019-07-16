import Vue from "vue";
import Vuex from "vuex";
import MarketplaceItemModel from "./models/marketplaceItem";

export const updateAllItemsMutation = 'updateAllItems';
export const updateFilteredItemsMutation = 'updateFilteredItems';
export const shownItemsMutation = 'shownItems';
export const updateFilterPassphraseMutation = 'updateFilterPassphrase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {
      allItems: Array<MarketplaceItemModel>(),
      filteredItems: Array<MarketplaceItemModel>(),
      shownItems: Array<MarketplaceItemModel>(),
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
      context.commit(updateAllItemsMutation, allItems);
      context.commit(updateFilteredItemsMutation, allItems);
      context.commit(shownItemsMutation, allItems);
    },
    updateFilterPassphrase(context, newSearchPhrase: string) {
      context.commit(updateFilterPassphraseMutation, newSearchPhrase);
    }
  }
});
