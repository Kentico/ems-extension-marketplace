import performItemsFiltering from "./filter";
import MarketplaceItemModel from "@/models/MarketplaceItemModel";
import CategoryModel from "@/models/CategoryModel";
import store, {
  updateCategoriesMutation,
  updateSelectedCategoriesMutation
} from "@/store";

export function initStoreWithCategories(allItems: Array<MarketplaceItemModel>) {
  let categoriesCountMap = new Map<string, CategoryModel>();
  allItems.map(item => {
    categoriesCountMap.has(item.category)
      ? categoriesCountMap.set(item.category, {
          name: item.category,
          count: categoriesCountMap.get(item.category)!.count + 1
        } as CategoryModel)
      : categoriesCountMap.set(item.category, {
          name: item.category,
          count: 1
        } as CategoryModel);
  });
  const categoriesCountArray = Array.from(categoriesCountMap.values());
  store.commit(updateCategoriesMutation, categoriesCountArray);
}

export function toggleCategoryInSelectedCategories(categoryName: string) {
  const selectedCategories = store.state.filter.selectedCategories;

  const index = selectedCategories.indexOf(categoryName);

  if (index === -1) {
    // not in selected -> select
    selectedCategories.push(categoryName);
  } else {
    // selected -> deselect
    selectedCategories.splice(index, 1);
  }

  store.commit(updateSelectedCategoriesMutation, selectedCategories);
  performItemsFiltering();
}
