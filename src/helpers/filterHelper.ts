import store, { updateFilteredItemsMutation } from '@/store';
import MarketplaceItemModel from '@/models/marketplaceItem';

export default function filterItems(searchPhrase: string) {
  const allItems: Array<MarketplaceItemModel> = store.state.data.allItems;

  if(searchPhrase === '') {
    store.commit(updateFilteredItemsMutation, allItems);
  } else {
    const filteredItems = allItems.filter(item => 
      item.name.includes(searchPhrase) ||
      item.description.includes(searchPhrase) ||
      item.source.includes(searchPhrase)
    );
  
    store.commit(updateFilteredItemsMutation, filteredItems);
  }
}