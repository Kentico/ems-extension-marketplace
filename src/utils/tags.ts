import MarketplaceItemModel from "@/models/marketplaceItemModel";
import store, { updateTagsCountMutation } from "@/store";

export function initStoreWithTags(allItems: Array<MarketplaceItemModel>) {
  let tagsCount = new Map<string, number>();
  allItems.map(item => {
    item.tags.map(tag =>
      tagsCount.has(tag)
        ? tagsCount.set(tag, tagsCount.get(tag)! + 1)
        : tagsCount.set(tag, 1)
    );
  });
  store.commit(updateTagsCountMutation, tagsCount);
}
