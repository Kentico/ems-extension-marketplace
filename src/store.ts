import Vue from "vue";
import Vuex from "vuex";
import MarketplaceItemModel from "./models/marketplaceItemModel";
import performItemsFiltering from "./utils/filter";
import { resetPaging, addNextPage } from "./utils/pager";
import CategoryModel from "./models/CategoryModel";
import { initStoreWithItems } from "./utils/items";
import { initStoreWithTags } from "./utils/tags";
import { initStoreWithCategories } from "./utils/categories";
import {
  initStoreWithKenticoVersions,
  KENTICO_VERSION_ALL_VERSIONS
} from "./utils/kenticoVersions";

export const updateAllItemsMutation = "updateAllItems";
export const updateFilteredItemsMutation = "updateFilteredItems";
export const updateItemsToShowMutation = "updateItemsToShow";
export const updateTagsCountMutation = "updateTagsCount";
export const updateKenticoVersionsFilterMutation =
  "updateKenticoVersionsFilter";
export const updateCategoriesMutation = "updateCategories";

export const updateFilterSearchPhraseMutation = "updateFilterSearchPhrase";
export const updateSelectedCategoriesMutation = "updateSelectedCategories";
export const updateSelectedKenticoVersionMutation =
  "updateSelectedKenticoVersion";
export const toggleCategoryInSelectedCategoriesMutation =
  "toggleCategoryInSelectedCategories";

export const addNextPageInPagerListingMutation = "addNextPageInPagerListing";
export const updatePagerLastItemIndexMutation = "updatePagerLastItemIndex";

export const initItemsStateAction = "initItemsState";
export const addPageAction = "addPage";
export const updateSearchPhraseAction = "updateFilterPassphrase";
export const updateSelectedCategoriesAction = "updateSelectedCategories";

Vue.use(Vuex);

export async function initializeStoreWithItemsAndNavigateNext(next: any) {
  await fetch(
    "https://raw.githubusercontent.com/Kentico/devnet.kentico.com/master/marketplace/extensions.json" +
      "?t=" +
      new Date().valueOf()
  ).then(async response => {
    return response.json().then(json => {
      const allItems = json as MarketplaceItemModel[];
      allItems.sort((a: MarketplaceItemModel, b: MarketplaceItemModel) =>
        a.name.localeCompare(b.name)
      );
      initStore(allItems);
      next();
    });
  });
}

export function initStore(allItems: Array<MarketplaceItemModel>) {
  initStoreWithItems(allItems);
  initStoreWithTags(allItems);
  initStoreWithCategories(allItems);
  initStoreWithKenticoVersions(allItems);
}

export default new Vuex.Store({
  state: {
    data: {
      allItems: Array<MarketplaceItemModel>(),
      filteredItems: Array<MarketplaceItemModel>(),
      itemsToShow: Array<MarketplaceItemModel>(),
      tagsCount: new Map<string, number>(),
      categories: new Array<CategoryModel>(),
      kenticoVersions: new Array<string>()
    },
    filter: {
      searchPhrase: "",
      selectedCategories: new Array<string>(),
      selectedKenticoVersion: KENTICO_VERSION_ALL_VERSIONS
    },
    pager: {
      lastItemIndex: 0
    }
  },
  mutations: {
    updateAllItems(state, allItems: Array<MarketplaceItemModel>) {
      state.data.allItems = allItems;
    },
    updateFilteredItems(state, filteredItems: Array<MarketplaceItemModel>) {
      state.data.filteredItems = filteredItems;
    },
    updateItemsToShow(state, itemsToShow: Array<MarketplaceItemModel>) {
      state.data.itemsToShow = itemsToShow;
    },
    updateTagsCount(state, tagsCount: Map<string, number>) {
      state.data.tagsCount = tagsCount;
    },
    updateCategories(state, categories: Array<CategoryModel>) {
      state.data.categories = categories;
    },
    updateFilterSearchPhrase(state, newSearchPhrase: string) {
      state.filter.searchPhrase = newSearchPhrase;
    },
    updateSelectedCategories(state, selectedCategories: Array<string>) {
      state.filter.selectedCategories = selectedCategories;
    },
    updateSelectedKenticoVersion(state, selectedKenticoVersion: string) {
      state.filter.selectedKenticoVersion = selectedKenticoVersion;
    },
    updateKenticoVersionsFilter(state, kenticoVersions: Array<string>) {
      state.data.kenticoVersions = kenticoVersions;
    },
    updatePagerLastItemIndex(state, lastItemIndex) {
      state.pager.lastItemIndex = lastItemIndex;
    }
  },
  getters: {
    allItems: state => state.data.allItems,
    filteredItems: state => state.data.filteredItems,
    itemsToShow: state => state.data.itemsToShow,
    tagsCount: state => state.data.tagsCount,
    categories: state => state.data.categories,
    kenticoVersions: state => state.data.kenticoVersions,
    filterSearchphrase: state => state.filter.searchPhrase,
    selectedCategories: state => state.filter.selectedCategories,
    selectedKenticoVersion: state => state.filter.selectedKenticoVersion,
    pagerLastItemIndex: state => state.pager.lastItemIndex
  },
  actions: {
    initItemsState(context, allItems) {
      context.commit(updateAllItemsMutation, allItems);
      performItemsFiltering();
      resetPaging();
    },
    updateFilterPassphrase(context, newSearchPhrase: string) {
      context.commit(updateFilterSearchPhraseMutation, newSearchPhrase);
    },
    updateSelectedCategories(context, newSelectedCategories: Array<string>) {
      context.commit(updateSelectedCategoriesMutation, newSelectedCategories);
    },
    filterItems(_) {
      performItemsFiltering();
    },
    addPage(_) {
      addNextPage();
    }
  }
});
