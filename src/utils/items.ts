import MarketplaceItemModel from "./../models/MarketplaceItemModel";
import store, { initItemsStateAction } from "./../store";

export function initStoreWithItems(allItems: Array<MarketplaceItemModel>) {
  store.dispatch(initItemsStateAction, allItems);
}
