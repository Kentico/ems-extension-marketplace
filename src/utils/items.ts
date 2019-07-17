import MarketplaceItemModel from "@/models/marketplaceItemModel";
import store, { initItemsStateAction } from "@/store";

export function initStoreWithItems(allItems: Array<MarketplaceItemModel>) {
  store.dispatch(initItemsStateAction, allItems);
}
