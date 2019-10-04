import MarketplaceItemModel from "@/models/marketplaceItemModel";
import TagModel from "@/models/TagModel";
import store, { updateTagsMutation, updateSelectedTagsMutation } from "@/store";
import performItemsFiltering from "./filter";

export function initStoreWithTags(allItems: Array<MarketplaceItemModel>) {
  let tagsCount = new Map<string, number>();
  allItems.map(item => {
    item.tags.map(tag =>
      tagsCount.has(tag)
        ? tagsCount.set(tag, tagsCount.get(tag)! + 1)
        : tagsCount.set(tag, 1)
    );
  });
  const normalizedTags: Array<TagModel> = [];
  tagsCount.forEach((count, tag) => {
    normalizedTags.push({
      count,
      name: tag
    });
  });
  store.commit(updateTagsMutation, normalizedTags);
}

export function toggleSelectedTag(tagName: string) {
  const selectedTags = store.state.filter.selectedTags;

  const index = selectedTags.indexOf(tagName);

  if (index === -1) {
    // not in selected -> select
    selectedTags.push(tagName);
  } else {
    // selected -> deselect
    selectedTags.splice(index, 1);
  }

  store.commit(updateSelectedTagsMutation, selectedTags);
  performItemsFiltering();
}
