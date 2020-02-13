import MarketplaceItemModel from "./../models/MarketplaceItemModel";

export function getPathSegmentFromItemName(itemName: string) {
  const lowerCasedItemName = itemName.toLocaleLowerCase();
  return encodeURI(lowerCasedItemName);
}

export function getItem(
  pathSegmentItemName: string,
  items: MarketplaceItemModel[]
): MarketplaceItemModel | null {
  const itemName = getLoweCasedItemNameFromPathSegment(pathSegmentItemName);
  const item = items.find(i => i.name.toLocaleLowerCase() === itemName);
  return item ? item : null;
}

function getLoweCasedItemNameFromPathSegment(pathSegment: string) {
  const lowerCasedPathSegment = pathSegment.toLocaleLowerCase();
  return decodeURI(lowerCasedPathSegment);
}
