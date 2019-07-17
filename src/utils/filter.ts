import store, { updateFilteredItemsMutation } from "@/store";
import MarketplaceItemModel from "@/models/marketplaceItemModel";
import { resetPaging } from "./pager";

export default function performItemsFiltering(searchPhrase: string) {
  const allItems: Array<MarketplaceItemModel> = store.state.data.allItems;

  if (searchPhrase === "") {
    store.commit(updateFilteredItemsMutation, allItems);
  } else {
    const lowerCasedSearchPhrase = searchPhrase.toLocaleLowerCase();
    const filteredItems = allItems.filter(
      item =>
        item.name.toLocaleLowerCase().includes(lowerCasedSearchPhrase) ||
        item.description.toLocaleLowerCase().includes(lowerCasedSearchPhrase) ||
        item.author.toLocaleLowerCase().includes(lowerCasedSearchPhrase)
    );

    store.commit(updateFilteredItemsMutation, filteredItems);
    resetPaging();
  }
}
