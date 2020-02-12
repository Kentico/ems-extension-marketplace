import MarketplaceItemModel from "@/models/marketplaceItemModel";

/**
 * Shuffles marketplace items using Fisher-Yates algorithm.
 * @param array initial array of marketplace items
 * @returns shuffled array of marketplace items
 */
export function shuffle(array: MarketplaceItemModel[]) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle...
  while (m) {
    // Pick a remaining element...
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
