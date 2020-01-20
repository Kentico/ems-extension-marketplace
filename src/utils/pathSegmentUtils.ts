import MarketplaceItemModel from "./../models/MarketplaceItemModel";

export function getPathSegmentFromItemName(itemName: string) {
  return encodeURI(itemName);
}

export function getItem(
  pathSegmentItemName: string,
  items: MarketplaceItemModel[]
): MarketplaceItemModel | null {
  const itemName = getItemNameFromPathSegment(pathSegmentItemName);
  const item = items.find(i => i.name === itemName);
  return item ? item : null;
}

function getItemNameFromPathSegment(pathSegment: string) {
  return decodeURI(pathSegment);
}
