import MarketplaceItemModel from "@/models/MarketplaceItemModel";

export function getPathSegmentFromItemName(itemName: string) {
  const lowerCased = itemName.toLowerCase();
  const lowerCasedWithoutSpaces = lowerCased.split(" ").join("-");
  return encodeURI(lowerCasedWithoutSpaces);
}

export function getItem(
  pathSegmentItemName: string,
  items: MarketplaceItemModel[]
): MarketplaceItemModel | null {
  const itemName = getItemNameFromPathSegment(pathSegmentItemName);
  const item = items.find(i => i.name.toLowerCase() === itemName);
  return item ? item : null;
}

function getItemNameFromPathSegment(pathSegment: string) {
  const lowerCased = pathSegment.toLowerCase();
  const lowerCasedWitSpaces = lowerCased.split("-").join(" ");
  return decodeURI(lowerCasedWitSpaces);
}
