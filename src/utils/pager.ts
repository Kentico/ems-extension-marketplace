import store, {
  updatePagerLastItemIndexMutation,
  updateItemsToShowMutation
} from "@/store";
import MarketplaceItemModel from "@/models/marketplaceItemModel";

const pageSize: number = 9;

export function resetPaging() {
  const lastItemIndex: number =
    store.getters.filteredItems.length >= pageSize
      ? pageSize - 1
      : store.getters.filteredItems.length - 1;
  store.commit(updatePagerLastItemIndexMutation, lastItemIndex);

  const filtereditems: Array<MarketplaceItemModel> =
    store.getters.filteredItems;

  store.commit(updateItemsToShowMutation, filtereditems.slice(0, pageSize));
}

export function addNextPage() {
  const filteredItems: Array<MarketplaceItemModel> =
    store.getters.filteredItems;
  const pagerLastItemIndex = store.getters.pagerLastItemIndex + pageSize;
  store.commit(updatePagerLastItemIndexMutation, pagerLastItemIndex);
  store.commit(
    updateItemsToShowMutation,
    filteredItems.slice(0, pagerLastItemIndex + 1)
  );
}
