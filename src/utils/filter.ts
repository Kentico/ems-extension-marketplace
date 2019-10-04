import store, { updateFilteredItemsMutation } from "@/store";
import MarketplaceItemModel from "@/models/marketplaceItemModel";
import { resetPaging } from "./pager";
import { KENTICO_VERSION_ALL_VERSIONS } from "./kenticoVersions";

export default function performItemsFiltering() {
  const allItems: Array<MarketplaceItemModel> = store.state.data.allItems;
  const searchPhrase = store.state.filter.searchPhrase;
  const selectedCategories = store.state.filter.selectedCategories;
  const selectedTags = store.state.filter.selectedTags;
  const selectedKenticoVersion = store.state.filter.selectedKenticoVersion;

  const searchFilteredItems = applySearchFilter(allItems, searchPhrase);
  const categoryFilteredItems = applyCategoriesFilter(
    searchFilteredItems,
    selectedCategories
  );
  const tagFilteredItems = applyTagsFilter(categoryFilteredItems, selectedTags);
  const itemsFilteredByKenticoVersion = applyKenticoVersionFilter(
    tagFilteredItems,
    selectedKenticoVersion
  );

  store.commit(updateFilteredItemsMutation, itemsFilteredByKenticoVersion);
  resetPaging();
}

function applySearchFilter(
  itemsToFilter: Array<MarketplaceItemModel>,
  searchPhrase: string
): Array<MarketplaceItemModel> {
  if (searchPhrase === "") {
    return itemsToFilter;
  } else {
    const lowerCasedSearchPhrase = searchPhrase.toLocaleLowerCase();
    const filteredItems = itemsToFilter.filter(
      item =>
        item.name.toLocaleLowerCase().includes(lowerCasedSearchPhrase) ||
        item.description.toLocaleLowerCase().includes(lowerCasedSearchPhrase) ||
        item.author.toLocaleLowerCase().includes(lowerCasedSearchPhrase)
    );
    return filteredItems;
  }
}

function applyCategoriesFilter(
  itemsToFilter: Array<MarketplaceItemModel>,
  selectedCategories: Array<string>
): Array<MarketplaceItemModel> {
  if (selectedCategories.length === 0) {
    return itemsToFilter;
  } else {
    return itemsToFilter.filter(
      item => selectedCategories.indexOf(item.category) !== -1
    );
  }
}

function applyTagsFilter(
  itemsToFilter: Array<MarketplaceItemModel>,
  selectedTags: Array<string>
): Array<MarketplaceItemModel> {
  if (selectedTags.length === 0) {
    return itemsToFilter;
  } else {
    return itemsToFilter.filter(item =>
      item.tags.some(itemTag => selectedTags.indexOf(itemTag) !== -1)
    );
  }
}

function applyKenticoVersionFilter(
  itemsToFilter: Array<MarketplaceItemModel>,
  selectedKenticoVersion: string
) {
  if (selectedKenticoVersion === KENTICO_VERSION_ALL_VERSIONS) {
    return itemsToFilter;
  }

  const filteredItems = itemsToFilter.filter(item => {
    return doesItemSupportKenticoVersion(item, selectedKenticoVersion);
  });

  return filteredItems;
}

function doesItemSupportKenticoVersion(
  item: MarketplaceItemModel,
  selectedKenticoVersion: string
): boolean {
  const foundVersions = item.kenticoVersions.filter(
    version => parseInt(version) === parseInt(selectedKenticoVersion)
  );
  return foundVersions && foundVersions.length > 0;
}
