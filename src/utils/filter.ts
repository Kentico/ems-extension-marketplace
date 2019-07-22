import store, { updateFilteredItemsMutation } from "@/store";
import MarketplaceItemModel from "@/models/marketplaceItemModel";
import { resetPaging } from "./pager";

export default function performItemsFiltering() {
  const allItems: Array<MarketplaceItemModel> = store.state.data.allItems;
  const searchPhrase = store.state.filter.searchPhrase;
  const searchedFilteredItems = applySearchFilter(allItems, searchPhrase);
  resetPaging();
  store.commit(updateFilteredItemsMutation, searchedFilteredItems);
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
