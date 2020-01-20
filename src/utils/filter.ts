import store, { updateFilteredItemsMutation } from "./../store";
import MarketplaceItemModel from "./../models/MarketplaceItemModel";
import { resetPaging } from "./pager";
import { KENTICO_VERSION_ALL_VERSIONS } from "./kenticoVersions";

export default function performItemsFiltering() {
  const allItems: Array<MarketplaceItemModel> = store.state.data.allItems;
  const searchPhrase = store.state.filter.searchPhrase;
  const selectedCategories = store.state.filter.selectedCategories;
  const selectedKenticoVersion = store.state.filter.selectedKenticoVersion;

  const searchFilteredItems = applySearchFilter(allItems, searchPhrase);
  const categoryFilteredItems = applyCategoriesFilter(
    searchFilteredItems,
    selectedCategories
  );
  const itemsFilteredByKenticoVersion = applyKenticoVersionFilter(
    categoryFilteredItems,
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
