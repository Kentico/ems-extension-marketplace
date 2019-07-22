import MarketplaceItemModel from "@/models/marketplaceItemModel";
import store, {
  updateCategoriesCountMutation,
  updateSelectedCategoriesMutation
} from "@/store";

export function initStoreWithCategories(allItems: Array<MarketplaceItemModel>) {
  let categoriesCount = new Map<string, number>();
  allItems.map(item => {
    categoriesCount.has(item.category)
      ? categoriesCount.set(
          item.category,
          categoriesCount.get(item.category)! + 1
        )
      : categoriesCount.set(item.category, 1);
  });
  store.commit(updateCategoriesCountMutation, categoriesCount);
}

export function toggleCategoryInSelectedCategories(categoryName: string) {
  const selectedCategories = store.state.filter.selectedCategories;

  if (selectedCategories.has(categoryName)) {
    selectedCategories.delete(categoryName);
  } else {
    selectedCategories.add(categoryName);
  }
  store.commit(updateSelectedCategoriesMutation, selectedCategories);
}
